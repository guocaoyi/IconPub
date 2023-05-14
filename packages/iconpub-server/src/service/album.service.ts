import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Icon } from 'src/model/icon.schema'
import { Album } from 'src/model/album.schema'

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
    return this.albumModel.find({ owner: ownerId })
  }
}
