import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * ObjectStoragePo
 */
@Schema()
export class ObjectStorage {
  @Prop({ required: false })
  id: number

  @Prop({ required: true })
  ownerId: string

  @Prop({ required: true })
  groupId: number

  @Prop({ required: true })
  iconCount: number

  @Prop({ required: true })
  isOutdated: boolean

  @Prop({ required: true })
  fileSize: number

  @Prop({ required: true })
  legacyFileSize: number

  @Prop({ required: true })
  legacyWebUri: string

  @Prop({ required: true })
  previewUri: string

  @Prop({ required: true })
  typeUri: string

  @Prop({ required: true })
  webUri: string

  @Prop({ alias: 'created_at', required: true })
  createdAt: string

  @Prop({ alias: 'updated_at' })
  updatedAt?: string

  @Prop({ alias: 'deleted_at' })
  deletedAt?: string
}

export type ObjectStorageDocument = ObjectStorage & Document

export const ObjectStorageSchema = SchemaFactory.createForClass(ObjectStorage)
