import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User {
  @Prop({ alias: '_id' })
  id: string

  @Prop()
  username: string

  @Prop({ default: '' })
  bio?: string

  @Prop({ type: [String], default: [] })
  organization?: string[]

  @Prop({ default: '', required: false })
  avatar: string

  @Prop({ default: '', required: false })
  email: string

  @Prop({ default: '', required: false })
  url: string

  /**
   * salt length is 16
   */
  @Prop({ required: true })
  salt: string

  /**
   * crypto password & salt by sha512
   */
  @Prop({ required: true })
  password: string

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: number

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt: number
}

export type UserDocument = Document<User>
export const UserSchema = SchemaFactory.createForClass(User)
