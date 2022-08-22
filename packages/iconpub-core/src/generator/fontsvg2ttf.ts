import * as fs from 'fs'
import svg2ttf from 'svg2ttf'
import ttf2eot from 'ttf2eot'
import ttf2woff2 from 'ttf2woff2'

/**
 * Font SVG to TTF
 */

const projectId = '1432709'
const fontFamily = 'iconpub'

var ttf = svg2ttf(fs.readFileSync('__mocks__/svg/webfont.svg', 'utf8'), {})
fs.writeFileSync(`./${fontFamily}/font_${projectId}.ttf`, new Buffer(ttf.buffer))

fs.writeFileSync(`./${fontFamily}/font_${projectId}.woff2`, ttf2woff2(new Buffer(ttf.buffer)))