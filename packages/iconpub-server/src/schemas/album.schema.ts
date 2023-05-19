import mongoose, { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from 'src/schemas/user.schema'

/**
 * album
 */
@Schema()
export class Album {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ required: true })
  description: string

  @Prop({
    alias: '',
    default: 'icon',
    enum: ['icon', 'illu', 'lottie', 'svg'],
  })
  type: 'icon' | 'illu' | 'lottie' | 'svg'

  @Prop({
    required: true,
    enum: ['private', 'protected', 'public'],
    default: 'private',
  })
  visibility: 'private' | 'protected' | 'public'

  @Prop({ required: true, default: 'active' })
  status: 'active' | 'archived' | 'deleted'

  /**
   * owner can visit\add\delete items(icon), achieve\delete album
   */
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User

  /**
   * contributor can read and write and delete items(icon)
   */
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  })
  contributors: User[]

  @Prop({ type: Number, default: 0 })
  count: number

  @Prop({ default: [] })
  tags: string[]

  @Prop({ type: [String], default: [] })
  icons: string[]

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: string

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt: string
}

export type AlbumDocument = Document<Album>
export const AlbumSchema = SchemaFactory.createForClass(Album)
