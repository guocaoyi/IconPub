import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'

import { Account } from '../models/schema/account.schema'
import { AccountDto } from '../models/dto/account.dto'

@Injectable()
export class AppService {
  constructor(@InjectModel(Account.name) private catModel: Model<Account>) {}

  getHello() {
    return 'hello'
  }

  async create(catDto: AccountDto): Promise<Account> {
    const createdCat = new this.catModel(catDto)
    return createdCat.save()
  }

  async findAll(): Promise<Account[]> {
    return this.catModel.find().exec()
  }
}
