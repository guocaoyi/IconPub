/** 字体 */
export interface Glyph {
  /** icon 编号 */
  icon_id: string

  /** 图标名称 */
  name: string

  /** class name */
  font_class: string

  /**
   * unicode hex
   * @description  and 项目唯一编号
   */
  unicode: `${number}`

  /** unicode decimal */
  unicode_decimal: number

  svg: string
}

/** project */
export interface IconSchema {
  /** project id */
  id: string

  /** project name */
  name: string

  /** font family label */
  font_family: string

  /** css 前缀 */
  css_prefix_text: string

  /**  */
  description: string

  /**  */
  glyphs: Glyph[]
}

/** 远程 */
interface FontSvg {
  /** 创建时间 */
  createdAt: string
  /** 更新时间 */
  updatedAt: string

  id: 120097

  owner_id: 255055
  owner_type: 'Project'

  /** json(schema) 文件地址 */
  json_file: string

  /** ttf file url */
  ttf_file: string
  /** eot file url */
  eot_file: string
  /** woff file url */
  woff_file: string
  /** woff2 file url */
  woff2_file: string

  /** svg file url */
  svg_file: string
  /** css file url */
  css_file: string
  /** js file url */
  js_file: string

  /** demo file url */
  demo_file: string
}
