import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User } from 'src/schemas/user.schema'

@Injectable()
export class UserService {
  private readonly logger: Logger = new Logger(UserService.name)

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(user: User) {
    return this.userModel.create(user)
  }

  modifier(id: string, user: User): Promise<any> {
    return this.userModel.updateOne({ _id: id }, user).exec()
  }

  getUserInfo(uid: string): Promise<User> {
    return this.userModel.findOne({ _id: uid }).exec()
  }

  queryUserById(username: string): Promise<User> {
    return this.userModel.findOne({ username: { $regex: username } }).exec()
  }

  queryUserByName(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec()
  }

  queryUserByNameAndEmail(username: string, email: string): Promise<User> {
    return this.userModel.findOne({ $or: [{ username }, { email }] }).exec()
  }

  queryUsersByNameReg(username: string): Promise<User[]> {
    return this.userModel.find({ username: { $regex: username } }).exec()
  }
}
