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

  /** unicode code */
  unicode: number

  projectId: number

  fontClass: string
  freeze: 0
  pathattributes: 'fill="#25467A"|fill="#EE6F0B"|fill="#EE6F0B"|fill="#7CB342"|fill="#D9792B"|fill="#FFBC00"|fill="#7CB342"|fill="#D9792B"|fill="#FBC02D"|fill="#25467A"|fill="#25467A"|fill="#25467A"|fill="#FFA726"'
  showSvg: string
}

export class IconDto {
  id: number

  name: string
  nameEn: string
  nameZh: string
  nameZhJp: string
  nameZhQp: string

  categoryEn: null
  categoryZh: null

  colorType: 1

  description: string
  groupId: number
  iconVersion: null

  ownerId: string
  renderType: 1
  resource: string
  sourceType: 0
  subgroupId: 0
  type: 0

  extraInfo: null

  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
