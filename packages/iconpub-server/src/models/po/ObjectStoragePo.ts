import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * ObjectStoragePo
 * @description object storage po
 * @description_zh 对象储存持久对象
 */
@Schema()
export class ObjectStoragePo {
  /** 编号 */
  @Prop({ required: false })
  id: number

  /** 管理员编号 */
  @Prop({ required: true })
  ownerID: string

  /** 项目编号 */
  @Prop()
  groupID: number
  /** 项目内图标数 */
  iconCount: number

  /** 是否过时 */
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

  @Prop({ alias: 'created_at', required: true })
  createdAt: string

  @Prop({ alias: 'updated_at' })
  updatedAt?: string

  @Prop({ alias: 'deleted_at' })
  deletedAt?: string
}

export type ObjectStorageDocument = ObjectStoragePo & Document

export const ObjectStorageSchema = SchemaFactory.createForClass(ObjectStoragePo)
