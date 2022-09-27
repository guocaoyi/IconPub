type URI = string

export class Creator {
  id: number
  nid: string
  nickname: string

  account_type: 1

  bio: ';=;'

  job_title: 'student'
  role: 0
  status: null

  avatar_file_name: null
  avatar_small_file_name: null
  avatar_tiny_file_name: null

  avatar: URI
  alipay_code: URI
  weixin_code: URI

  createdAt: string
  updatedAt: string
}

export class AccountDto {
  /** 账号组织编号 */
  accountGroupId: number

  /** 头像（URI） */
  avatarUri: string

  /** 账号创建时间 */
  createTime: number

  description: string

  deviceId: '0'

  email: string

  /** 是否已设置密码 */
  hasPassword: boolean
  loginName: string

  mobile: string
  mobileId: '0'
  mobileType: 0

  screenName: string
  userId: string

  /**
   * user type
   * @description_zh 用户类型
   * @enum { 0 | 1 } 0: personal user 1: enterprise user
   */
  userType: 0 | 1

  password: string
}
