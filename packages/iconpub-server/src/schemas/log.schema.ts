import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export class Operator {
  uid: string
  user: string
  action: string
  target: string
  targetType: string
}

@Schema()
export class Log {
  @Prop()
  album: string

  @Prop(
    raw({
      operatorId: { type: String, required: true },
      operator: { type: String, required: true },
      action: { type: String, required: true },
    }),
  )
  content: Record<string, Operator>

  @Prop({ required: true, default: '' })
  ip: string

  @Prop({ required: false, default: '' })
  ua: string

  @Prop({ alias: 'created_at', default: Date.now() })
  createdAt: string
}

export type LogDocument = Document<Log>
export const LogSchema = SchemaFactory.createForClass(Log)
