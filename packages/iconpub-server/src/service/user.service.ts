import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User } from 'src/model/user.schema'
import { Profile } from 'src/model/profile.schema'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ name: username })
  }

  async getUserInfo(uid: string): Promise<Profile> {
    return this.profileModel.findOne({ _id: uid })
  }
}
