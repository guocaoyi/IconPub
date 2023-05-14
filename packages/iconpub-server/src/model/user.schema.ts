import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'

import { Profile } from './profile.schema'

@Schema()
export class User {
  @Prop({ required: true })
  id: string

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  })
  profile: Profile

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

  @Prop({ alias: 'created_at', required: true, default: Date.now() })
  createdAt: string

  @Prop({ alias: 'updated_at', default: Date.now() })
  updatedAt: string

  @Prop({ alias: 'deleted_at' })
  deletedAt?: string
}

export type UserDocument = Document<User>
export const UserSchema = SchemaFactory.createForClass(User)
