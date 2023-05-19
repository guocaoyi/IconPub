import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * Icon
 */
@Schema()
export class Icon {
  @Prop({ required: true, description: 'icon name' })
  name: string

  @Prop({ required: true, default: (self: any) => `icon_${self.count++}` })
  symbol: string

  @Prop({ required: true })
  unicode: number

  @Prop({ alias: 'album_id', required: true })
  albumId: number

  @Prop({ default: '', required: true })
  description: string

  @Prop()
  owner: string

  @Prop({
    type: String,
    enum: ['icon', 'illu', 'svg', 'font'],
    default: 'icon',
  })
  type: 'icon' | 'illu' | 'svg' | 'font'

  @Prop({ type: String, required: true })
  resource: string

  @Prop({ type: [String], default: [] })
  tags: string[]

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: number

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt?: number
}

export type IconDocument = Icon & Document
export const IconSchema = SchemaFactory.createForClass(Icon)
