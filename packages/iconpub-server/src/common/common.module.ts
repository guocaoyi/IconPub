import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TerminusModule } from '@nestjs/terminus'

@Module({
  imports: [TerminusModule],
  controllers: [AppController],
})
export class CommonModule {}
