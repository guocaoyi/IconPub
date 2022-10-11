import { Controller, Get } from '@nestjs/common'

import { AppService } from '../service/app.service'

/**
 * user controller
 * @author yalda
 * @date 2022-10-10
 */
@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  lists(): string {
    return this.appService.getHello()
  }
}
