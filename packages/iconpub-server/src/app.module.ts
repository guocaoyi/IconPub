import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { MongooseModule } from '@nestjs/mongoose'

import { AccountController } from './controller/account.controller'
import { AlbumController } from './controller/album.controller'
import { AppController } from './controller/app.controller'
import { HealthController } from './controller/health.controller'
import { ProjectController } from './controller/project.contrller'
import { SystemController } from './controller/system.controller'
import { UserController } from './controller/user.controller'

import { AppService } from './service/app.service'
import { IconService } from './service/icon.service'
import { UserService } from './service/user.service'

import { Account, AccountSchema } from './models/schema/account.schema'
import { Cat, CatSchema } from './models/cat.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/iconpub'),
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Account.name, schema: AccountSchema },
    ]),
    TerminusModule,
  ],
  controllers: [
    AccountController,
    AlbumController,
    AppController,
    HealthController,
    ProjectController,
    SystemController,
    UserController,
  ],
  providers: [AppService, IconService, UserService],
  exports: [],
})
export class AppModule {}
