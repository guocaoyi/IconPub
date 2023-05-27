import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * album
 */
@Schema()
export class Album {
  @Prop({
    required: true,
    type: String,
    unique: true,
    index: true,
  })
  name: string

  @Prop({ type: String, default: '' })
  description: string

  @Prop({
    type: String,
    default: 'icon',
    enum: ['icon', 'illu', 'lottie', 'svg'],
  })
  type: 'icon' | 'illu' | 'lottie' | 'svg'

  @Prop({
    type: String,
    required: true,
    enum: ['private', 'protected', 'public'],
    default: 'private',
  })
  visibility: 'private' | 'protected' | 'public'

  @Prop({ type: String, required: true, default: 'active' })
  status: 'active' | 'archived' | 'deleted'

  /**
   * owner can visit\add\delete items(icon), achieve\delete album
   */
  @Prop({ type: String, required: true })
  owner: string

  /**
   * contributor can read and write and delete items(icon)
   * include owner
   */
  @Prop({
    type: [String],
    required: false,
    default: [],
  })
  contributors: string[]

  @Prop({ type: [String], default: [] })
  icons: string[]

  @Prop({ type: Number, required: true, default: 0 })
  count: number

  @Prop({ type: [String], default: [] })
  tags: string[]
}

export type AlbumDocument = Document<Album>
export const AlbumSchema = SchemaFactory.createForClass(Album)
