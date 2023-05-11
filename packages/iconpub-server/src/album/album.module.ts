import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AlbumController } from './controller/album.controller'
import { AlbumService } from './service/album.service'
import { IconController } from './controller/icon.controller'
import { IconService } from './service/icon.service'

import { Album, AlbumSchema } from './model/album.schema'
import { Icon, IconSchema } from './model/icon.schema'
import { ObjectStorage, ObjectStorageSchema } from './model/os.schema'
import { Resource, ResourceSchema } from './model/resouce.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Album.name, schema: AlbumSchema },
      { name: Icon.name, schema: IconSchema },
      { name: ObjectStorage.name, schema: ObjectStorageSchema },
      { name: Resource.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [AlbumController, IconController],
  providers: [AlbumService, IconService],
})
export class AlbumModule {}
