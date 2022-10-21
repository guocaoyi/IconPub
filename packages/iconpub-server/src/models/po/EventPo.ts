export class EventPo {
  accountId: number

  username: string

  cloudAuditEvent: ''
  errorCode: 0

  eventName: string
  eventNameCn: string
  eventRegion: string
  eventSource: 'account.api.icons.pub'
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
