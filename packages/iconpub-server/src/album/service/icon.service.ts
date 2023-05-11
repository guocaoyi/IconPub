import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Icon } from '../model/icon.schema'

@Injectable()
export class IconService {
  constructor(@InjectModel(Icon.name) private iconModel: Model<Icon>) {}

  async create(icon: Icon): Promise<Icon> {
    const createdIcon = new this.iconModel(icon)
    return createdIcon.save()
  }

  async findAll(orgId: string): Promise<Icon[]> {
    return this.iconModel.find({ $and: [{ orgId: orgId }, { deletedAt: null }] }).exec()
  }

  /**
   * delete icon by id
   */
  async delete(iconId: string, ownerId: string): Promise<void> {
    await this.iconModel.remove({ $and: [{ _id: iconId }, { orgId: ownerId }] }).exec()
  }
}
