import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Profile {
  @Prop({ required: true })
  id: string

  @Prop()
  name: string

  @Prop({ default: '' })
  bio?: string

  @Prop({ type: [String], default: [] })
  organization?: string[]

  @Prop({ default: '' })
  avatar?: string

  @Prop({ default: '' })
  email?: string

  @Prop({ default: '' })
  url: string
}

export type ProfileDocument = Document<Profile>
export const ProfileSchema = SchemaFactory.createForClass(Profile)
