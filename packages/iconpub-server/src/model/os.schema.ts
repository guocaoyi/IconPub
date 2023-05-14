import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 *
 */
@Schema()
export class ObjectStorage {
  @Prop({ required: false })
  id: number

  @Prop({ alias: 'owner_id', required: true })
  ownerId: string

  @Prop({ alias: 'album_id', required: true })
  albumId: number

  @Prop({ alias: 'icon_count', required: true })
  iconCount: number

  @Prop({ alias: 'is_out_dataed', required: true })
  isOutdated: boolean

  @Prop({ alias: 'file_size', required: true })
  fileSize: number

  @Prop({ alias: 'legacy_file_size', required: true })
  legacyFileSize: number

  @Prop({ alias: 'legacy_web_uri', required: true })
  legacyWebUri: string

  @Prop({ alias: 'preview_uri', required: true })
  previewUri: string

  @Prop({ alias: 'type_uri', required: true })
  typeUri: string

  @Prop({ alias: 'web_uri', required: true })
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
