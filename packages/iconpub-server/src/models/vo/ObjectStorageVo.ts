/**
 * ObjectStorageVo
 * @description object storage vo
 * @description_zh 对象储存
 */
export class ObjectStorageVo {
  id: number

  ownerID: string

  groupID: number

  iconCount: number

  isOutdated: true

  /** Web Component ES2019 文件尺寸（KB） */
  fileSize: number
  /** Web Component ES2015 文件尺寸（KB） */
  legacyFileSize: number

  /** Web Component ES2015 文件地址 */
  legacyWebUri: string
  /** TS defined ES2019 文件地址 */
  previewUri: string
  /** 类型定义文件地址 */
  typeUri: string
  /** SVG Symbol 文件地址 */
  webUri: string

  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
