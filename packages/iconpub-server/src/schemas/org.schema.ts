import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Org {
  @Prop({
    required: true,
    type: String,
    unique: true,
    index: true,
  })
  label: string

  @Prop({ type: String, default: '' })
  bio: string

  @Prop({ type: String, default: '' })
  avatar: string

  @Prop({ type: String, default: '' })
  url: string

  /**
   * owner of org
   */
  @Prop({ type: String, required: true })
  owner: string

  /**
   * members of org
   */
  @Prop({ required: true, type: [String], default: '' })
  members: string[]
}

export type OrgDocument = Document<Org>
export const OrgSchema = SchemaFactory.createForClass(Org)
