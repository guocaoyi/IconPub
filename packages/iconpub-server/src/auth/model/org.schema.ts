import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Org {
  @Prop()
  id: string

  @Prop({ required: true })
  name: string

  @Prop()
  description: string

  @Prop()
  email: string

  @Prop()
  gender: 0

  @Prop()
  hasPassword: boolean

  @Prop()
  loginName: string

  @Prop()
  mobile: string

  @Prop()
  mobileId: string

  @Prop()
  mobileType: 0 | 1

  @Prop()
  screenName: string

  @Prop()
  userId: string

  @Prop()
  userType: 1

  /**
   * User type (rule)
   * @type { 0 | 1 | 2 | 3 }
   * 0: owner: write\read\delete\update
   * 1: contributor: write\read\update
   * 2: reader: read
   * 3: manager:
   */
  @Prop()
  authorityType: 0 | 1 | 2 | 3

  @Prop()
  password: string

  @Prop()
  createAt: number

  @Prop()
  updateAt: number
}

export type OrgDocument = Document<Org>
export const OrgSchema = SchemaFactory.createForClass(Org)
