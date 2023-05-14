import * as process from 'node:process'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { TerminusModule } from '@nestjs/terminus'

import configuration from 'src/config/configuration'

import { AlbumController } from 'src/controller/album.controller'
import { AppController } from 'src/controller/app.controller'
import { AuthController } from 'src/controller/auth.controller'
import { IconController } from 'src/controller/icon.controller'
import { UserController } from 'src/controller/user.controller'

import { Album, AlbumSchema } from 'src/model/album.schema'
import { Icon, IconSchema } from 'src/model/icon.schema'
import { Log, LogSchema } from 'src/model/log.schema'
import { ObjectStorage, ObjectStorageSchema } from 'src/model/os.schema'
import { Profile, ProfileSchema } from 'src/model/profile.schema'
import { Resource, ResourceSchema } from 'src/model/resouce.schema'
import { Sessions, SessionsSchema } from 'src/model/session.schema'
import { User, UserSchema } from 'src/model/user.schema'

import { AccountService } from 'src/service/account.service'
import { AlbumService } from 'src/service/album.service'
import { AuthService } from 'src/service/auth.service'
import { IconService } from 'src/service/icon.service'
import { UserService } from 'src/service/user.service'

@Module({
  imports: [
    TerminusModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(`${process.env.DATABASE_URI}/${process.env.DATABASE_DB}`),
    MongooseModule.forFeature([
      { name: Album.name, schema: AlbumSchema },
      { name: Icon.name, schema: IconSchema },
      { name: Log.name, schema: LogSchema },
      { name: Profile.name, schema: ProfileSchema },
      { name: ObjectStorage.name, schema: ObjectStorageSchema },
      { name: Resource.name, schema: ResourceSchema },
      { name: Sessions.name, schema: SessionsSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AppController, AlbumController, IconController, AuthController, UserController],
  providers: [AccountService, AlbumService, AuthService, IconService, , UserService],
})
export class MainModule {}
