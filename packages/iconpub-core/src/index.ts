import crypto from 'node:crypto'
import path from 'node:path'
import process from 'node:process'
import stream from 'node:stream'

import SVGIcons2SVGFontStream from 'svgicons2svgfont'
import cosmiconfig from 'cosmiconfig'
import deepmerge from 'deepmerge'
import globby from 'globby'

import { getGlyphsData } from './glyphsData'
import { getOptions } from './options'
import { getBuiltInTemplates, getTemplateFilePath } from '../../templates'

import type { Readable } from 'node:stream'
import type { Format, GlyphData, InitialOptions } from '../types'
import type { Result } from '../types/Result'

interface Webfont {
  (initialOptions?: InitialOptions): Promise<Result>
}

export const buildConfig = async (options) => {
  let searchPath: string | null = process.cwd()
  let configPath = null

  if (options.configFile) {
    searchPath = null
    configPath = path.resolve(process.cwd(), options.configFile)
  }

  const configExplorer = cosmiconfig('webfont')

  let config = await configExplorer.search(searchPath)

  if (configPath) {
    config = await configExplorer.load(configPath)
  }

  if (!config) {
    return {}
  }

  return config
}

export const toSvg = (glyphsData, options) => {
  let result = ''

  return new Promise((resolve, reject) => {
    let log = () => {
      Function.prototype()
    }

    if (options.verbose) {
      // eslint-disable-next-line no-console
      log = console.log.bind(console)
    }

    const fontStream = new SVGIcons2SVGFontStream({
      ...options,
      ascent: options.ascent,
      centerHorizontally: options.centerHorizontally,
      descent: options.descent,
      fixedWidth: options.fixedWidth,
      fontHeight: options.fontHeight,
      fontId: options.fontId,
      fontName: options.fontName,
      fontStyle: options.fontStyle,
      fontWeight: options.fontWeight,
      metadata: options.metadata,
      normalize: options.normalize,
      round: options.round,
      log,
    })
      .on('finish', () => resolve(result))
      .on('data', (data) => {
        result += data
      })
      .on('error', (error) => reject(error))

    glyphsData.forEach((glyphData) => {
      const glyphStream: Readable = new stream.Readable()

      glyphStream.push(glyphData.contents)
      glyphStream.push(null)

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      glyphStream.metadata = glyphData.metadata

      fontStream.write(glyphStream)
    })

    fontStream.end()
  })
}

export const toTtf = (buffer, options) => Buffer.from(svg2ttf(buffer, options).buffer)

export const toEot = (buffer) => Buffer.from(ttf2eot(buffer).buffer)

export const toWoff = (buffer, options) => Buffer.from(ttf2woff(buffer, options).buffer)

export const toWoff2 = (buffer) => wawoff2.compress(buffer)

export const webfont: Webfont = async (initialOptions) => {
  let options = getOptions(initialOptions)

  const config = await buildConfig({
    configFile: options.configFile,
  })

  if (Object.keys(config).length > 0) {
    options = deepmerge(options, config.config, {
      arrayMerge: (_destinationArray, sourceArray) => sourceArray,
    })
    options.filePath = config.filepath
  }

  const foundFiles = await globby([].concat(options.files))
  const filteredFiles = foundFiles.filter((foundFile) => path.extname(foundFile) === '.svg')

  if (filteredFiles.length === 0) {
    throw new Error('Files glob patterns specified did not match any files')
  }

  let glyphsData = (await getGlyphsData(filteredFiles, options)) as GlyphData[]

  if (options.glyphTransformFn && typeof options.glyphTransformFn === 'function') {
    const transformedGlyphs = glyphsData.map(async (glyphData: GlyphData) => {
      const metadata = await options.glyphTransformFn(glyphData.metadata)

      return {
        ...glyphData,
        metadata,
      }
    })
    glyphsData = await Promise.all(transformedGlyphs)
  }

  let ttfOptions = {}

  if (options.formatsOptions && options.formatsOptions.ttf) {
    ttfOptions = options.formatsOptions.ttf
  }

  const svg = (await toSvg(glyphsData, options)) as Result['svg']
  const ttf = toTtf(svg, ttfOptions)

  const result: Result = {
    glyphsData,
    hash: crypto.createHash('md5').update(svg).digest('hex'),
    svg,
    ttf,
  }

  if (options.formats.includes('eot')) {
    result.eot = toEot(ttf)
  }

  if (options.formats.includes('woff')) {
    result.woff = toWoff(ttf, { metadata: options.metadata })
  }

  if (options.template) {
    const builtInTemplates = getBuiltInTemplates()

    // eslint-disable-next-line init-declarations
    let templateFilePath

    if (Object.keys(builtInTemplates).includes(options.template)) {
      result.usedBuildInTemplate = true

      const builtInPath = path.resolve(__dirname, '../..')
      nunjucks.configure(builtInPath)
      templateFilePath = getTemplateFilePath(options.template)
    } else {
      const resolvedTemplateFilePath = path.resolve(options.template)

      nunjucks.configure(path.dirname(resolvedTemplateFilePath))
      templateFilePath = path.resolve(resolvedTemplateFilePath)
    }

    let hashOption = {}

    if (options.addHashInFontUrl) {
      hashOption = { hash: result.hash }
    }

    const nunjucksOptions = deepmerge.all([
      {
        glyphs: result.glyphsData.map((glyph: GlyphData) => glyph.metadata),
      },
      options,
      {
        cacheString: options.templateCacheString || Date.now(),
        className: options.templateClassName || options.fontName,
        fontName: options.templateFontName || options.fontName,
        fontPath: options.templateFontPath.replace(/\/?$/u, '/'),
      },
      hashOption,
      {
        fonts: Object.fromEntries(
          new Map(
            options.formats.map((format: Format) => [
              format,
              () => {
                if (format === 'woff2') {
                  return Buffer.from(result.woff2).toString('base64')
                }
                return result[format].toString('base64')
              },
            ]),
          ),
        ),
      },
    ])

    result.template = nunjucks.render(templateFilePath, nunjucksOptions)
  }

  if (!options.formats.includes('svg')) {
    delete result.svg
  }

  if (!options.formats.includes('ttf')) {
    delete result.ttf
  }

  result.config = options

  return result
}

export default webfont
