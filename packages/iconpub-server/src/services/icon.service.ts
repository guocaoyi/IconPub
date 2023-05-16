import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Icon } from 'src/schemas/icon.schema'
import { IconDto, CreateIconDto, UpdateIconDto } from 'src/models/icon.dto'

@Injectable()
export class IconService {
  private readonly logger = new Logger(IconService.name)

  constructor(@InjectModel(Icon.name) private iconModel: Model<Icon>) {}

  async create(createIconDto: CreateIconDto) {
    const createdIcon = new this.iconModel(createIconDto)
    return createdIcon.save()
  }

  async update(iconDto: UpdateIconDto) {
    const createdIcon = new this.iconModel(iconDto)
    return createdIcon.save()
  }

  async findById(iconId: string): Promise<Icon> {
    return this.iconModel.findOne({ _id: iconId }).exec()
  }

  async findAll(ownerId: string): Promise<Icon[]> {
    this.logger.log(`findAll ownerId: ${ownerId}`)
    return this.iconModel.find({ $and: [{ ownerId: ownerId }, { deletedAt: null }] }).exec()
  }

  /**
   * delete icon by id
   */
  async delete(iconId: string, ownerId: string): Promise<void> {
    await this.iconModel.remove({ $and: [{ _id: iconId }, { ownerId: ownerId }] }).exec()
  }
}
