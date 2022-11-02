import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'

import { databaseProviders } from './database.providers'

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

@Module({
  imports: [TerminusModule],
  controllers: [
    AccountController,
    AlbumController,
    AppController,
    HealthController,
    ProjectController,
    SystemController,
    UserController,
  ],
  providers: [...databaseProviders, AppService, IconService, UserService],
  exports: [...databaseProviders],
})
export class AppModule {}
