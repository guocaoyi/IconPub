import * as crypto from 'node:crypto'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from './user.service'
import { User } from 'src/schemas/user.schema'

@Injectable()
export class AuthService {
  private readonly SaltLength = 16
  private readonly HashedIterations = 10000
  private readonly HashedDigest = 'sha512'

  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  /**
   * @param username: string
   * @param pass: string, hashed password(base64)
   */
  async signIn(username: string, pass: string) {
    // check user

    // pass base64 decode
    const user = await this.userService.findOne(username)
    const hashedPass = this.hashPassword(pass, user?.salt)
    if (user?.password !== hashedPass) {
      throw new UnauthorizedException("password doesn't match")
    }

    const payload = {
      id: user.name,
      username: user.name,
      sub: user.url,
    }

    return {
      token: await this.jwtService.signAsync(payload),
    }
  }

  /**
   *
   */
  async signUp(username: string, password: string) {
    const salt = this.genSalt()
    const hashedPassword = this.hashPassword(password, salt)
    const user = new User()
    user.name = username
    user.salt = salt
    user.password = hashedPassword
    user.createdAt = Date.now()
    user.updatedAt = Date.now()
    return this.userService.create(user)
  }

  /**
   * generate salt
   */
  genSalt() {
    return crypto.randomBytes(this.SaltLength).toString('hex')
  }

  /**
   * hashed password
   */
  hashPassword(password: string, salt: string) {
    return crypto
      .pbkdf2Sync(password, salt, this.HashedIterations, 32, this.HashedDigest)
      ?.toString?.('hex')
  }

  /**
   * verify password
   */
  comparePassword(password: string, hashedPassword: string, salt: string) {
    const derivedPassword = crypto
      .pbkdf2Sync(password, salt, this.HashedIterations, 32, this.HashedDigest)
      .toString('hex')

    return hashedPassword === derivedPassword
  }
}
