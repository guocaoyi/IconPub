import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Setting {
  @Prop()
  name: string

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: number

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt: number

  @Prop({ alias: 'deleted_at' })
  deletedAt?: number
}

export type SettingDocument = Document<Setting>
export const SettingSchema = SchemaFactory.createForClass(Setting)
