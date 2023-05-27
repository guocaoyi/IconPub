import * as crypto from 'node:crypto'
import { CreateUserDto } from 'src/models/user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { User } from 'src/schemas/user.schema'

@Injectable()
export class AuthService {
  private readonly SaltLength = 16
  private readonly HashedIterations = 10000
  private readonly HashedDigest = 'sha512'

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private hashed(password: string, salt: string) {
    return crypto
      .pbkdf2Sync(password, salt, this.HashedIterations, 32, this.HashedDigest)
      .toString('hex')
  }

  /**
   * sing up
   */
  async signUp(createUserDto: CreateUserDto) {
    const salt = this.genSalt()
    const hashedPassword = this.hashPassword(createUserDto.password, salt)
    const user = new User()
    user.username = createUserDto.username
    user.email = createUserDto.email
    user.salt = salt
    user.password = hashedPassword
    return this.userModel.create(user)
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
    return this.hashed(password, salt)
  }

  /**
   * verify password
   */
  comparePassword(password: string, hashedPassword: string, salt: string) {
    const derivedPassword = this.hashed(password, salt)

    return hashedPassword === derivedPassword
  }
}
