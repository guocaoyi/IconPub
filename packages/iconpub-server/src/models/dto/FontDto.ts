/**
 * 字体链接实例
 */
export class FontDto {
  id: number
  owner_id: number
  owner_type: 'Project' | ''

  css_file: string
  eot_file: string
  js_file: string
  json_file: string
  svg_file: string
  ttf_file: string
  woff2_file: string
  woff_file: string
  demo_file: string

  css_font_face_src: string

  createdAt: string
  updatedAt: string
}
