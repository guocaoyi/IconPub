import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User, UserDocument } from 'src/schemas/user.schema'

@Injectable()
export class UserService {
  private readonly logger: Logger = new Logger(UserService.name)

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(user: User) {
    return this.userModel.create(user)
  }

  async findOne(username: string): Promise<User> {
    const u = await this.userModel.findOne({ name: username }).exec()
    return u
  }

  async getUserInfo(uid: string): Promise<User> {
    return this.userModel.findOne({ _id: uid })
  }

  /**
   * search
   */
  async hasUser(username: string, email: string): Promise<boolean> {
    const result = await this.userModel.findOne({ $or: [{ name: username }, { email }] }).exec()
    this.logger.debug(result)
    return result !== null
  }

  /**
   * search by name
   */
  async queryByName(name: string): Promise<UserDocument[]> {
    return await this.userModel.find({ name: { $regex: name } })
  }
}
