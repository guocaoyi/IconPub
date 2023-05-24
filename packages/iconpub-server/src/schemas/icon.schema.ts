import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Icon {
  @Prop({ required: true, type: String })
  name: string

  @Prop({ type: String, default: '' })
  description: string

  @Prop({ required: true, type: String })
  symbol: string

  @Prop({ required: true, type: Number })
  unicode: number

  @Prop({ required: true, type: Number, alias: 'album_id' })
  albumId: number

  @Prop({
    type: String,
    enum: ['icon', 'illu', 'svg', 'font'],
    default: 'icon',
  })
  type: 'icon' | 'illu' | 'svg' | 'font'

  @Prop({ required: true, type: String })
  resource: string

  @Prop({ type: [String], default: [] })
  tags: string[]
}

export type IconDocument = Icon & Document
export const IconSchema = SchemaFactory.createForClass(Icon)
