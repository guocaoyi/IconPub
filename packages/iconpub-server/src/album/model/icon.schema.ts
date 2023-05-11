import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * Icon
 */
@Schema()
export class Icon {
  @Prop({ required: true })
  id: number

  /** unicode hex */
  @Prop({ alias: 'unicode_hex', required: true })
  unicodeHex: string

  @Prop({ required: true })
  unicode: number

  /** icon ablum id */
  @Prop({ alias: 'album_id', required: true })
  albumId: number

  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  symbol: string

  @Prop({ default: '' })
  description: string

  @Prop({
    type: String,
    enum: ['icon', 'illu', 'svg', 'font'],
    default: 'icon',
  })
  type: 'icon' | 'illu' | 'svg' | 'font'

  @Prop({ type: [String], default: [] })
  tags: string[]

  @Prop({ alias: 'extra_info', type: String, default: '' })
  extraInfo: string

  /** font class */
  @Prop({ alias: 'font_class', type: String, default: '' })
  fontClass: string

  @Prop({ type: String, default: '' })
  pathAttributes: string

  @Prop({ type: String, default: '' })
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
