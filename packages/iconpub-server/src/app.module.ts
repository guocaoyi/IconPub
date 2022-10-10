import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AccountController } from './controller/account.controller'
import { AlbumController } from './controller/album.controller'
import { AppController } from './controller/app.controller'
import { ProjectController } from './controller/project.contrller'
import { SystemController } from './controller/system.controller'
import { UserController } from './controller/user.controller'

import { AppService } from './service/app.service'

@Module({
  // imports: [MongooseModule.forRoot('mongodb://127.0.0.1/iconpub')],
  imports: [],
  controllers: [
    AccountController,
    AlbumController,
    AppController,
    ProjectController,
    SystemController,
    UserController,
  ],
  providers: [AppService],
})
export class AppModule {}
