class Icon {
  id: number
}

export class BasicIcon {
  name: string
  show_svg: string
}

export class PreviewIcon extends BasicIcon {
  height: number
  width: number
}

export class FontIconDto extends BasicIcon {
  id: 27923659
  name: string
  unicode: number /** unicode 码 */

  projectId: 3487347
  project_id: 3487347

  font_class: 'hanbao'
  freeze: 0
  path_attributes: 'fill="#25467A"|fill="#EE6F0B"|fill="#EE6F0B"|fill="#7CB342"|fill="#D9792B"|fill="#FFBC00"|fill="#7CB342"|fill="#D9792B"|fill="#FBC02D"|fill="#25467A"|fill="#25467A"|fill="#25467A"|fill="#FFA726"'
  show_svg: string
}

export class IconDto {
  /** 图标编号 */
  id: number

  /** 名称 */
  name: 'preview-open'
  /** 名称（英文）*/
  name_en: 'preview-open'
  /** 名称（中文）*/
  name_zh: '预览-打开'
  /** 名称（中文简拼）*/
  name_zh_jp: string
  /** 名称（中文全拼）*/
  name_zh_qp: string

  category_en: null
  category_zh: null

  color_type: 1

  description: 'preview-open'
  /** 分组编号 */
  groupID: 13582
  iconVersion: null

  ownerID: '3523296614707965'
  render_type: 1
  resource: string
  sourceType: 0
  subgroupID: 0
  type: 0

  _extraInfo: null

  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
