import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User {
  @Prop({
    required: true,
    type: String,
    unique: true,
    index: true,
  })
  username: string

  @Prop({ type: String, default: '' })
  bio: string

  @Prop({ required: true, type: [String], default: [] })
  organization: string[]

  @Prop({ type: String, default: '' })
  avatar: string

  @Prop({
    type: String,
    default: '',
    unique: true,
    index: true,
  })
  email: string

  @Prop({ type: String, default: '' })
  url: string

  /**
   * salt length is 16
   */
  @Prop({
    type: String,
    required: true,
  })
  salt: string

  /**
   * crypto password & salt by sha512
   */
  @Prop({ type: String, required: true })
  password: string
}

export type UserDocument = Document<User>
export const UserSchema = SchemaFactory.createForClass(User)
