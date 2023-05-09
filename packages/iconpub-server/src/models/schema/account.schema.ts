import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type AccountDocument = HydratedDocument<Account>

@Schema()
export class Account {
  @Prop()
  accountGroupId: number

  @Prop()
  avatarUri: string

  @Prop()
  description: string

  @Prop()
  deviceId: '0'

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
   * account type (rule)
   * @type { 0 | 1 | 2 | 3 }
   * 0: owner
   * 1: author
   * 2: reader
   * 3: manager
   */
  @Prop()
  authorityType: 0 | 1 | 2 | 3

  @Prop()
  password: string

  @Prop()
  createAt: number
}

export const AccountSchema = SchemaFactory.createForClass(Account)
