import mongoose, { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from 'src/model/user.schema'

/**
 * album
 */
@Schema()
export class Album {
  id: number

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

  /**
   * private: just for owner
   * protected: for owner and contributors and org members
   * public: for all platform user can visit
   */
  @Prop({ required: true })
  visibility: 'private' | 'protected' | 'public'

  @Prop({ required: true, default: 'active' })
  status: 'active' | 'archived'

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

  @Prop({ default: 0 })
  resourceCount: number

  @Prop({ default: '' })
  resourceSvgUri: string

  @Prop({ default: '' })
  resourceCompUri: string

  @Prop({ default: [] })
  tags: string[]

  @Prop({ type: [String], default: [] })
  icons: string[]

  @Prop({ type: [Boolean], default: false })
  pined: boolean

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: string

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt: string

  @Prop({ alias: 'deleted_at' })
  deletedAt?: string
}

export type AlbumDocument = Document<Album>
export const AlbumSchema = SchemaFactory.createForClass(Album)
