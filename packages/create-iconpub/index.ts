import * as fs from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'
import minimist from 'minimist'
import prompts from 'prompts'
import mustache from 'mustache'
import { ansi256, red, reset } from 'kolorist'

const argv = minimist(process.argv.slice(2), { string: ['_'] })
const cwd = process.cwd()

/**
 * 仓库类型
 */
export const GitPlatform = [
  {
    name: 'github',
    kolor: ansi256(81),
  },
  {
    name: 'gitlab',
    kolor: ansi256(81),
  },
  {
    name: 'gitee',
    kolor: ansi256(81),
  },
]

export const Storage = [
  {
    name: 'npm',
    kolor: ansi256(81),
  },
  {
    name: 'bucket',
    kolor: ansi256(81),
  },
]

/** bucket firm */
export const BucketFirm = [
  {
    name: 'Ali OSS',
    firm: 'aliyun',
    value: 'oss',
    sdk: 'ali-oss',
    kolor: ansi256(81),
  },
  {
    name: 'Tencent Cloud COS',
    firm: 'tencent-cloud',
    value: 'cos',
    kolor: ansi256(81),
  },
  {
    name: 'Huawei Cloud OBS',
    firm: 'huawei-cloud',
    value: 'obs',
    skd: 'esdk-obs-nodejs',
    kolor: ansi256(81),
  },
  {
    name: 'Qiniu Kodo',
    firm: 'qiniu',
    value: 'kodo',
    kolor: ansi256(81),
  },
]

const Boilerplates: Array<{ title: string; value: string }> = []

const renameFiles: { [K: string]: string } = {
  '.gitignore.mustache': '.gitignore',
  'CHANGELOG.md.mustache': 'CHANGELOG.md',
  'README.md.mustache': 'README.md',
}

const init = async () => {
  let targetDir = formatTargetDir(argv._[0]) || ''
  let author = '**'
  let template = argv.template || argv.t

  const defaultTargetDir = 'icon-pub'
  const getProjectName = () => (targetDir === '.' ? path.basename(path.resolve()) : targetDir)

  let result: any = {}

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : 'text',
          name: 'projectName',
          message: reset('Project name:'),
          initial: defaultTargetDir,
          onState: (state) => {
            targetDir = formatTargetDir(state.value) || defaultTargetDir
          },
        },
        {
          type: !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            (targetDir === '.' ? 'Current directory' : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`,
        },
        {
          type: targetDir ? null : 'text',
          name: 'author',
          message: reset('Author:'),
          initial: 'no one',
          onState: (state) => {
            author = formatTargetDir(state.value) || 'no one'
          },
        },
        {
          type: (_, opts: any = {}) => {
            if (opts.overwrite === false) {
              throw new Error(red('✖') + ' Operation cancelled')
            }
            return 'text'
          },
          name: 'overwriteChecker',
        },
        {
          type: isValidPackageName(getProjectName()) ? null : 'text',
          name: 'packageName',
          message: reset('Package name:'),
          initial: toValidPackageName(getProjectName()),
          validate: (dir) => isValidPackageName(dir) || 'Invalid package.json name',
        },
        {
          type: template && Boilerplates.includes(template) ? null : 'select',
          name: 'boilerplate',
          message:
            typeof template === 'string'
              ? reset(`"${template}" isn't a valid template. Please choose from below: `)
              : reset('Boilerplate:'),
          initial: 0,
          choices: Boilerplates.map((framework): { title: string; value: string } => {
            return {
              title: framework.title,
              value: framework.value,
            }
          }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled')
        },
      },
    )
  } catch {
    console.log('error')
    return
  }

  // user choice associated with prompts
  const { packageName, overwrite, boilerplate } = result

  const root = path.join(cwd, targetDir)

  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true })
  }

  // determine template
  template = boilerplate?.name || template

  console.log(`\Scaffolding project in ${root}...`)

  // template boilerplate
  const templateDir = path.resolve(__dirname, '..', `boilerplate-${template}`)

  // mustache
  const mustacheDir = path.resolve(__dirname, '..', 'mustache')

  const opts = {
    name: packageName || getProjectName(),
    author: author || '*',
    now: (new Date() as DatePlus).format('yyyy.MM.dd'),
    nowYear: (new Date() as DatePlus).format('yyyy'),
  }

  const writeMu = (file: string) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    copy(path.join(mustacheDir, file), targetPath, opts)
  }

  const write = (file: string, content?: string) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content ?? '')
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  // write boilerpalte files
  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  // merge mustache files
  const mFiles = fs.readdirSync(mustacheDir)
  for (const file of mFiles) {
    writeMu(file)
  }

  // write package.json
  const pkg = JSON.parse(fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'))
  pkg.name = packageName || getProjectName()
  pkg.author = author || '*'

  write('package.json', JSON.stringify(pkg, null, 2))

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  console.log(`\nDone. Now run:\n`)
  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`)
  }
  switch (pkgManager) {
    case 'yarn':
      console.log('  yarn')
      console.log('  yarn dev')
      break
    default:
      console.log(`  ${pkgManager} install`)
      console.log(`  ${pkgManager} run dev`)
      break
  }
}

interface DatePlus extends Date {
  format: (fmt: string) => string
}

;(Date as any).prototype.format = function (fmt: string) {
  const o: any = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (const k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      )
  return fmt
}

/**
 * format target dir
 */
const formatTargetDir = (targetDir = '') => {
  return targetDir.trim().replace(/\/+$/g, '')
}

const copy = (src: string, dest: string, opts = {}) => {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else if (/\.mustache$/gi.test(src)) {
    const stemp = fs.readFileSync(src, { encoding: 'utf8' })
    const result = mustache.render(stemp, opts)
    dest = dest.replace(/\.mustache$/gi, '')
    fs.writeFileSync(dest, result, { encoding: 'utf-8' })
  } else {
    fs.copyFileSync(src, dest)
  }
}

/**
 * @param {string} projectName
 */
const isValidPackageName = (projectName: string) => {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)
}

/**
 * @param {string} projectName
 */
const toValidPackageName = (projectName: string): string => {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

/**
 * @param {string} srcDir
 * @param {string} destDir
 */
const copyDir = (srcDir: string, destDir: string) => {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

/**
 * @param {string} path
 */
const isEmpty = (path: string) => {
  const files = fs.readdirSync(path)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

/**
 * @param {string} dir
 */
const emptyDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
const pkgFromUserAgent = (userAgent: string | undefined) => {
  if (!userAgent) return undefined
  const pkgSpecArr = userAgent?.split(' ')?.[0]?.split('/') ?? []
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  }
}

init().catch((e) => {
  console.error(e)
})
