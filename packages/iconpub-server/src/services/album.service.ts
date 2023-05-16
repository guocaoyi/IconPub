import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Icon } from 'src/schemas/icon.schema'
import { Album } from 'src/schemas/album.schema'

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Icon.name) private iconModel: Model<Icon>,
    @InjectModel(Album.name) private albumModel: Model<Album>,
  ) {}

  async createAlbum(album: Album): Promise<Album> {
    return this.albumModel.create(album)
  }

  async getAlbums(ownerId: string): Promise<Album[]> {
    // get own albums & public albums
    return this.albumModel.find({ $or: [{ ownerId }, { isPublic: true }] })
  }
}
