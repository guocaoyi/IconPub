import { Controller, Get, Post } from '@nestjs/common'

import { AppService } from '../service/app.service'

/**
 * user controller
 * @author yalda
 */
@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getInfoById(): string {
    return this.appService.getHello()
  }

  @Post('/:id')
  users(): string {
    return this.appService.getHello()
  }
}
