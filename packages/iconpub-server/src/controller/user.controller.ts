import { Controller, Get, Post } from '@nestjs/common'

import { AppService } from '../service/app.service'

/**
 * @author yalda
 */
@Controller('/api/user')
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
