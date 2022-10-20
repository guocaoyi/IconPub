export class EventPo {
  accountId: number

  username: string

  cloudAuditEvent: ''
  /** 错误码 */
  errorCode: 0

  /** 事件名 */
  eventName: string
  /** 事件名（中文） */
  eventNameCn: string
  /** 事件区域 */
  eventRegion: string
  /** 事件源 */
  eventSource: 'account.api.icons.pub'
  /** 事件时间 */
  eventTime: string

  /** 请求ID（UUID） */
  requestId: string
  /** 资源类型 */
  resourceRegion: ''
  /** 资源类型（中文） */
  resourceTypeCn: string

  /** 资源组 */
  resources: {
    /** 资源名称 */
    resourceName: ''
    /** 资源类型 */
    resourceType: 'account'
  }

  /** 密钥ID */
  secretId: string

  /**
   * 位置（运营商）
   */
  location: string

  /** 源 IP 地址 */
  sourceIPAddress: string
}
