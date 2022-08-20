import { Module } from '@nestjs/common'
// import { MongooseModule } from '@nestjs/mongoose'

import { AccountController } from './controller/account.controller'
import { AppController } from './controller/app.controller'
import { UserController } from './controller/user.controller'
import { AppService } from './service/app.service'

@Module({
  // imports: [MongooseModule.forRoot('mongodb://127.0.0.1/iconpub')],
  imports: [],
  controllers: [AccountController, AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
