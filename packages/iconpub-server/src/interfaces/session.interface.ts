import { Request } from '@nestjs/common'

export interface Req extends Request {
  user: UserSession
}

export interface UserSession {
  id: string

  username: string

  /**
   * issued at
   */
  iat: number

  /**
   * expiration time
   */
  exp: number
}
