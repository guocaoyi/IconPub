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
