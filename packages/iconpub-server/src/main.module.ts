import * as process from 'node:process'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { TerminusModule } from '@nestjs/terminus'
import { JwtModule } from '@nestjs/jwt'

import configuration from 'src/configs/configuration'

import { AlbumController } from 'src/controllers/album.controller'
import { AuthController } from 'src/controllers/auth.controller'
import { FileController } from './controllers/file.controller'
import { FontController } from './controllers/font.controller'
import { HealthController } from 'src/controllers/health.controller'
import { IconController } from 'src/controllers/icon.controller'
import { UserController } from 'src/controllers/user.controller'

import { RolesGuard } from 'src/guards/roles.guard'

import { Album, AlbumSchema } from 'src/schemas/album.schema'
import { Icon, IconSchema } from 'src/schemas/icon.schema'
import { Log, LogSchema } from 'src/schemas/log.schema'
import { Org, OrgSchema } from './schemas/org.schema'
import { ObjectStorage, ObjectStorageSchema } from 'src/schemas/os.schema'
import { Setting, SettingSchema } from 'src/schemas/setting.schema'
import { User, UserSchema } from 'src/schemas/user.schema'

import { AccountService } from 'src/services/account.service'
import { AlbumService } from 'src/services/album.service'
import { AuthService } from 'src/services/auth.service'
import { IconService } from 'src/services/icon.service'
import { UserService } from 'src/services/user.service'
import { APP_GUARD } from '@nestjs/core'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    JwtModule.register({
      global: true,
      secret: configuration().jwt.secret,
      signOptions: { expiresIn: '10h' },
    }),
    TerminusModule,
    MongooseModule.forRoot(`${process.env.DATABASE_URI}/${process.env.DATABASE_DB}`),
    MongooseModule.forFeature([
      { name: Album.name, schema: AlbumSchema },
      { name: Icon.name, schema: IconSchema },
      { name: Log.name, schema: LogSchema },
      { name: Org.name, schema: OrgSchema },
      { name: ObjectStorage.name, schema: ObjectStorageSchema },
      { name: Setting.name, schema: SettingSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [
    AlbumController,
    AuthController,
    FileController,
    FontController,
    HealthController,
    IconController,
    UserController,
  ],
  providers: [
    { provide: APP_GUARD, useClass: RolesGuard },
    AccountService,
    AlbumService,
    AuthService,
    IconService,
    UserService,
  ],
})
export class MainModule {}
