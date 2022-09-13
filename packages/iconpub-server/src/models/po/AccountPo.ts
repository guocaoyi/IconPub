/** */
export class AccountPo {
  accountGroupId: number

  avatarUri: string

  description: string

  deviceId: '0'

  email: string
  gender: 0
  hasPassword: boolean
  loginName: ''
  mobile: string
  mobileId: '0'
  mobileType: 0
  screenName: string
  userId: string
  userType: 1

  /**
   * account type (rule)
   * @type { 0 | 1 | 2 | 3 }
   * 0: owner
   * 1: author
   * 2: reader
   * 3: manager
   */
  authorityType: 0 | 1 | 2 | 3

  password: string

  createAt: number
}
