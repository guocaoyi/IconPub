import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { ResourceUri } from './album.dto'

@Schema()
export class Resource {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  hash: string

  @Prop({ required: true })
  albumId: string

  @Prop(raw({}))
  uris: ResourceUri

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

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: string

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt: string

  @Prop({ alias: 'deleted_at' })
  deletedAt?: string
}

export type ResourceDocument = Resource & Document
export const ResourceSchema = SchemaFactory.createForClass(Resource)
