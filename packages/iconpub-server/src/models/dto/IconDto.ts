export class BasicIcon {
  name: string
  showSvg: string
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

  fontClass: string
  freeze: 0
  pathattributes: 'fill="#25467A"|fill="#EE6F0B"|fill="#EE6F0B"|fill="#7CB342"|fill="#D9792B"|fill="#FFBC00"|fill="#7CB342"|fill="#D9792B"|fill="#FBC02D"|fill="#25467A"|fill="#25467A"|fill="#25467A"|fill="#FFA726"'
  showSvg: string
}

export class IconDto {
  /** 图标编号 */
  id: number

  /** 名称 */
  name: string
  /** 名称（英文）*/
  nameEn: string
  /** 名称（中文）*/
  nameZh: string
  /** 名称（中文简拼）*/
  nameZhJp: string
  /** 名称（中文全拼）*/
  nameZhQp: string

  categoryEn: null
  categoryZh: null

  colorType: 1

  description: string
  /** 分组编号 */
  groupID: number
  iconVersion: null

  ownerID: string
  renderType: 1
  resource: string
  sourceType: 0
  subgroupID: 0
  type: 0

  extraInfo: null

  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
