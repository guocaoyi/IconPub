import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * ObjectStoragePo
 * @description object storage po
 * @description_zh 对象储存持久对象
 */
@Schema()
export class ObjectStoragePo {
  @Prop({ required: false })
  id: number

  @Prop({ required: true })
  ownerId: string

  @Prop({ required: true })
  groupId: number

  iconCount: number
  isOutdated: boolean

  fileSize: number
  legacyFileSize: number
  legacyWebUri: string
  previewUri: string
  typeUri: string
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
