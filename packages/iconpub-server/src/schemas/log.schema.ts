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
  albumId: string

  @Prop(
    raw({
      // user id
      operatorId: { type: String, required: true },
      // user name
      operator: { type: String, required: true },
      // delete, update, create , fork, publish, unpublish, like, unlike, view, download....
      action: { type: String, required: true },
      // target name
      handle: { type: String, required: true },
    }),
  )
  content: Record<string, Operator>

  @Prop({ type: String, default: '' })
  ip: string

  @Prop({ type: String, default: '', alias: 'user_agent' })
  userAgent: string
}

export type LogDocument = Document<Log>
export const LogSchema = SchemaFactory.createForClass(Log)
