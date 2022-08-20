export class EventPo {
  /** 用户名 */
  accountID: number
  /** 操作人 */
  username: string

  cloudAuditEvent: '{"userIdentity":{"principalId":"100000605015","accountId":"100000605015","secretId":"AKIDsZSK5urDQjalTKeCRnHxuH6pRGnVyWiKEkt550Bk3q3Ti72FiHreaqoHEa5qIZuL","type":"Root","userName":"root","sessionContext":"{\\"token\\": \\"fCbyHojPCJi92PrUld3ndn0mnBumx4da5d4ff8e21efda22fda12e3f6df404ba5mwGxF8nYSP6MI9ZTO9eeDkv7NryYy0jQ4Qfl08Wv9PtCbUWiS6S5Y_SB6JevQ2Gl9mjdYoGGxlC70acV9TmME-NjoP919rMFGc503t7nLH2bVjIYR724TievqDQ1Nif-vVfe4z4m2ql1Ei7-BopOQ0aYnCvxq-2Q4ZhCMBeV6MR929ndSU4mbKfD-M3vzm1XTJNLeI8MBY8_eFxOCxhmc7apjO-5rSAZ2Me8XMEJjKmxbb6TVgSuMbncU3q7JrvM\\", \\"ua\\": \\"6b389b01b18f1d9e759f60cbc8824fd9\\", \\"userIp\\": \\"58.240.254.162\\", \\"uin\\": 100000605015, \\"ownerUin\\": 100000605015, \\"appId\\": 1256452541, \\"expireTime\\": \\"2022-08-16 16:43:24\\", \\"mfa\\": 1, \\"mfaExpireTime\\": \\"0000-00-00 00:00:00\\", \\"interfaceName\\": \\"\\", \\"hasPolicyFilter\\": 0, \\"policyFilter\\": \\"\\", \\"extraInfo\\": \\"{\\\\\\"dictId\\\\\\":2342,\\\\\\"mfaExpireTime\\\\\\":\\\\\\"2022-08-16 15:05:07\\\\\\",\\\\\\"sessionUin\\\\\\":5000}\\"}"},"@timestamp":"2022-08-16T06:43:28.125631","onlyRecordNotSeen":"0","eventRegion":"ap-guangzhou","eventVersion":2,"errorCode":"0","errorMessage":"permission verify","requestID":"9a06e215-b7e7-4ab3-9598-54c05278f1e9","eventID":"9a06e215-b7e7-4ab3-9598-54c05278f1e9","apiVersion":"3.0","eventType":"ConsoleCall","actionType":"Write","authMode":"0","isRisk":"0","ruleId":"0","httpMethod":"POST","apiErrorCode":0,"apiErrorMessage":"","userAgent":"SDK_NODEJS_0.2.1","eventTime":1660632204,"updateEsTime":16606322060883231,"sensitiveAction":"1","cliIp":"58.240.254.162","eventPlatform":"0","sourceIPAddress":"58.240.254.162","resourceType":"account","eventName":"UnbindAccount","eventSource":"account.ap-guangzhou.api.tencentyun.com","requestParameters":"{\\"Region\\":\\"ap-guangzhou\\",\\"SecretId\\":\\"AKIDsZSK5urDQjalTKeCRnHxuH6pRGnVyWiKEkt550Bk3q3Ti72FiHreaqoHEa5qIZuL\\",\\"Timestamp\\":\\"1660632205\\",\\"Nonce\\":\\"4390\\",\\"RequestClient\\":\\"SDK_NODEJS_0.2.1\\",\\"Type\\":\\"wechat\\",\\"Lang\\":\\"zh\\",\\"Version\\":\\"2018-12-25\\",\\"Action\\":\\"UnbindAccount\\",\\"RequestOperator\\":\\"100000605015\\",\\"Token\\":\\"fCbyHojPCJi92PrUld3ndn0mnBumx4da5d4ff8e21efda22fda12e3f6df404ba5mwGxF8nYSP6MI9ZTO9eeDkv7NryYy0jQ4Qfl08Wv9PtCbUWiS6S5Y_SB6JevQ2Gl9mjdYoGGxlC70acV9TmME-NjoP919rMFGc503t7nLH2bVjIYR724TievqDQ1Nif-vVfe4z4m2ql1Ei7-BopOQ0aYnCvxq-2Q4ZhCMBeV6MR929ndSU4mbKfD-M3vzm1XTJNLeI8MBY8_eFxOCxhmc7apjO-5rSAZ2Me8XMEJjKmxbb6TVgSuMbncU3q7JrvM\\",\\"RequestSource\\":\\"MC\\",\\"seqId\\":\\"298a8ae8-ace9-5fb2-6a00-cab5cda58bca\\"}","resources":"[\\"*\\"]","resourceName":"","tags":[""],"cloudapi":1,"auth":1,"signature":0}'
  /** 错误码 */
  errorCode: 0

  /** 事件名 */
  eventName: string
  /** 事件名（中文） */
  eventNameCn: string
  /** 事件区域 */
  eventRegion: 'ap-guangzhou'
  /** 事件源 */
  eventSource: 'account.api.icons.pub'
  /** 事件时间 */
  eventTime: string

  /** 请求ID（UUID） */
  requestID: string
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
   * @example 中国 江苏省 南京市 中国联通
   */
  location: string

  /** 源 IP 地址 */
  sourceIPAddress: string
}
