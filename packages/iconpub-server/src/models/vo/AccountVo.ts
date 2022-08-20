/** */
export class AccountVo {
  /** 账号组织编号 */
  accountGroupId: number
  /** 头像（URI） */
  avatarUri: string
  /** 账号创建时间 */
  createTime: number

  /** 账号创建时间 */
  description: string
  deviceId: '0'

  email: string
  gender: 0
  hasPassword: boolean
  loginName: ''
  mobile: string // 脱敏处理
  mobileId: '0'
  mobileType: 0
  screenName: string
  userId: string
  userType: 1

  /**
   * 账号拥有者
   * @type { 0 | 1 | 2 | 3 }
   * 0: 所有者
   * 1: 可编辑
   * 2: 可阅读
   * 3: 管理员
   */
  authorityType: 0 | 1 | 2 | 3
  password: ''
}
