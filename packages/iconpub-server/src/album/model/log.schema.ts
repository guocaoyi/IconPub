import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose'
import { Document } from 'mongoose'

class Operator {}

export type ActionType =
  | 'create'
  | 'update'
  | 'remove'
  | 'transfer' //
  | 'migreate'
  //
  | 'archive'
  | 'star'
  | 'fork' // fork album & icon

@Schema()
export class Log {
  @Prop(
    raw({
      id: { type: Number, required: true },
      user: { type: String, required: true },
      action: {
        type: String,
        required: true,
        enum: ['create', 'update', 'remove', 'frozen', 'migreate', 'fork', 'star', 'transfer'],
      },
      target: { type: String, required: true },
      targetType: {
        type: String,
        required: true,
        enum: ['album', 'category', 'icon', 'contributor', 'role', 'org'],
      },
    }),
  )
  operator: Record<string, Operator>

  @Prop({ required: true })
  type: string

  @Prop({ required: true })
  content: string

  @Prop({ default: '0.0.0.0' })
  ip: string

  @Prop({ default: '' })
  ua: string

  @Prop({ alias: 'created_at', default: Date.now() })
  createdAt: string
}

export type LogDocument = Document<Log>
export const LogSchema = SchemaFactory.createForClass(Log)
