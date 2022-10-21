export class ObjectStorageFormDto {}

/**
 * ObjectStorageVo
 * @description object storage vo
 * @description_zh 对象储存传输层对象
 */
export class ObjectStorageDto {
  id: number

  /** 管理员编号 */
  ownerId: string
  /** 项目编号 */
  groupId: number
  /** 项目内图标数 */
  iconCount: number

  /** 是否过时 */
  isOutdated: true

  /** Web Component ES2019 文件尺寸（KB） */
  fileSize: number
  /** Web Component ES2015 文件尺寸（KB） */
  legacyFileSize: number

  /** ES2015 文件地址 */
  legacyWebUri: string
  /** TS defined ES2019 文件地址 */
  previewUri: string
  /** 类型定义文件地址 */
  typeUri: string
  /** SVG Symbol 文件地址 */
  webUri: string
}
