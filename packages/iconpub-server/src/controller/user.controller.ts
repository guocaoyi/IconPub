import { Controller, Get } from '@nestjs/common'

import { AppService } from '../service/app.service'

/**
 * user controller
 * @author yalda
 * @date 2020-08-10
 */
@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
