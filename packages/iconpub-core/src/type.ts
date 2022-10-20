export interface Glyph {
  icon_id: string

  name: string

  /** class name */
  font_class: string

  /**
   * unicode hex
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

  css_prefix_text: string

  description: string

  glyphs: Glyph[]
}

interface FontSvg {
  id: number

  owner_id: number
  owner_type: 'Project'

  json_file: string

  ttf_file: string

  eot_file: string

  woff_file: string

  woff2_file: string

  /** svg file url */
  svg_file: string
  /** css file url */
  css_file: string
  /** js file url */
  js_file: string

  /** demo file url */
  demo_file: string

  /** create timer */
  createdAt: string
  /** update timer */
  updatedAt: string
}
