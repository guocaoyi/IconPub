import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type AccountDocument = HydratedDocument<Account>


@Schema()
export class EventAction {
  @Prop()
  accountId: number

  @Prop()
  username: string

  @Prop()
  cloudAuditEvent: ''

  @Prop()
  errorCode: 0

  @Prop()
  eventName: string
  @Prop()
  eventNameCn: string
  @Prop()
  eventRegion: string
  @Prop()
  eventSource: 'api.icons.pub'
  @Prop()
  eventTime: string

  requestId: string
  resourceRegion: ''
  resourceTypeCn: string

  resources: {
    resourceName: ''
    resourceType: 'account'
  }

  secretId: string
  location: string
  sourceIPAddress: string
}


export const AccountSchema = SchemaFactory.createForClass(Account)
