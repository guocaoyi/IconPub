import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User {
  @Prop()
  id: string

  @Prop()
  org: string[]

  @Prop({ default: '' })
  avatar: string

  @Prop({ required: true, default: '' })
  name: string

  @Prop()
  email: string

  @Prop()
  userId: string

  @Prop()
  userType: 1

  @Prop({ required: true })
  orgs: string[]

  @Prop({ required: true })
  salt: string

  /**
   * crypto password & salt by sha512
   */
  @Prop({ required: true })
  password: string

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: string

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt: string

  @Prop({ alias: 'deleted_at' })
  deletedAt?: string
}

export type UserDocument = Document<User>
export const UserSchema = SchemaFactory.createForClass(User)
