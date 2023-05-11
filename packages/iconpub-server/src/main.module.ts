import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AlbumModule } from './album/album.module'
import { AuthModule } from './auth/auth.module'
import { CommonModule } from './common/common.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/iconpub'),
    AlbumModule,
    AuthModule,
    CommonModule,
  ],
})
export class MainModule {}
