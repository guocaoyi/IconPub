import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'

import { User } from './user.schema'

@Schema()
export class Sessions {
  @Prop({ required: true })
  id: string

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  userInfo: User

  /**
   * crypto password & salt by sha512
   */
  @Prop({ required: true })
  password: string

  /**
   * salt length is 16
   */
  @Prop({ required: true })
  salt: string

  @Prop({ required: true })
  ip: string

  @Prop({ alias: 'user_agent', required: true })
  ua: string

  @Prop({ alias: 'sign_at', required: true, default: Date.now() })
  createAt: string
}

export type SessionsDocument = Document<Sessions>
export const SessionsSchema = SchemaFactory.createForClass(Sessions)
