export class BasicIcon {
  name: string
  show_svg: string
}

export class PreviewIcon extends BasicIcon {
  height: number
  width: number
}

export class FontIconDto extends BasicIcon {
  id: number
  name: string
  unicode: number /** unicode 码 */

  projectId: number
  project_id: number

  font_class: string
  freeze: 0
  path_attributes: 'fill="#25467A"|fill="#EE6F0B"|fill="#EE6F0B"|fill="#7CB342"|fill="#D9792B"|fill="#FFBC00"|fill="#7CB342"|fill="#D9792B"|fill="#FBC02D"|fill="#25467A"|fill="#25467A"|fill="#25467A"|fill="#FFA726"'
  show_svg: string
}

export class IconDto {
  /** 图标编号 */
  id: number

  /** 名称 */
  name: string
  /** 名称（英文）*/
  name_en: string
  /** 名称（中文）*/
  name_zh: string
  /** 名称（中文简拼）*/
  name_zh_jp: string
  /** 名称（中文全拼）*/
  name_zh_qp: string

  category_en: null
  category_zh: null

  color_type: 1

  description: string
  /** 分组编号 */
  groupID: number
  iconVersion: null

  ownerID: string
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
