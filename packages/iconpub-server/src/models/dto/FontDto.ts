/**
 * 字体链接实例
 */
export class FontDto {
  id: number
  ownerId: number
  ownerType: 'Project' | ''

  cssFontFaceSrc: string

  eotFile: string
  ttfFile: string
  woff2File: string
  woffFile: string

  cssFile: string
  jsFile: string
  jsonFile: string
  svgFile: string
  demoFile: string

  createdAt: string
  updatedAt: string
}
