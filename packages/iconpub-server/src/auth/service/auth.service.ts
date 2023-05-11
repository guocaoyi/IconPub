import * as crypto from 'node:crypto'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { UserService } from './user.service'

@Injectable()
export class AuthService {
  private readonly SaltLength = 16

  constructor(private userService: UserService) {}

  /**
   *
   */
  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }
    const { password, ...result } = user
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result
  }

  /**
   *
   */
  async signUp(username: string, password: string) {
    //
    const salt = this.generateSalt()
    const hashedPassword = this.hashPassword(password, salt)

    // storage user info

    // create default org `**'s pub`
  }

  /**
   * sign out
   */
  async signOut() {
    // delete session \ token
  }

  /**
   * generate salt
   */
  generateSalt() {
    return crypto.randomBytes(this.SaltLength).toString('hex')
  }

  /**
   * hashed password
   */
  hashPassword(password: string, salt: string) {
    return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512')?.toString?.('hex')
  }

  /**
   * verify password
   */
  verifyPassword(password: string, hashedPassword: string, salt: string) {
    const derivedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')

    return hashedPassword === derivedPassword
  }
}
