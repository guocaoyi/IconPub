import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * Icon
 */
@Schema()
export class Icon {
  @Prop({ required: true })
  id: number

  @Prop({ required: true })
  symbol: string

  @Prop({ required: true })
  name: string

  @Prop({ default: '', required: true })
  description: string

  @Prop({ required: true })
  unicode: number

  /** owner id */
  @Prop()
  owner: string

  /** icon ablum id */
  @Prop({ alias: 'album_id', required: true })
  albumId: number

  @Prop({
    type: String,
    enum: ['icon', 'illu', 'svg', 'font'],
    default: 'icon',
  })
  type: 'icon' | 'illu' | 'svg' | 'font'

  @Prop({ type: [String], default: [] })
  tags: string[]

  @Prop({ type: [String], default: [] })
  content: string

  @Prop({ alias: 'extra_info', type: String, default: '' })
  extraInfo: string

  /** font class */
  @Prop({ alias: 'font_class', type: String, default: '' })
  fontClass: string

  @Prop({ alias: 'path_attributes', type: String, default: '' })
  pathAttributes: string

  @Prop({ alias: 'show_svg', type: String, default: '' })
  showSvg: string

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: string

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt?: string

  @Prop({ alias: 'deleted_at' })
  deletedAt?: string
}

export type IconDocument = Icon & Document
export const IconSchema = SchemaFactory.createForClass(Icon)
