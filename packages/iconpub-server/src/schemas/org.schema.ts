import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Org {
  @Prop({ required: true })
  name: string

  @Prop({ default: '' })
  url: string

  @Prop({ default: '' })
  manages: string

  @Prop({ default: '' })
  users: string[]
}

export type OrgDocument = Document<Org>
export const OrgSchema = SchemaFactory.createForClass(Org)
