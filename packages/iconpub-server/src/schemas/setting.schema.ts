import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Setting {
  @Prop({ required: true, type: String })
  name: string

  @Prop(
    raw({
      oskey: { type: String },
      osSecret: { type: String },
      osBucket: { type: String },
      osPrePath: { type: String },
    }),
  )
  objectStorage: Record<string, string>
}

export type SettingDocument = Document<Setting>
export const SettingSchema = SchemaFactory.createForClass(Setting)
