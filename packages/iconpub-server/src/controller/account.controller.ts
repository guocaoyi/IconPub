import { Controller, Get, Session } from '@nestjs/common'

import { AppService } from '../service/app.service'

/**
 * account controller
 * @author yalda
 */
@Controller('/api/account')
export class AccountController {
  constructor(private readonly appService: AppService) {}

  /**
   *
   */
  @Get('/info')
  info(@Session() session: { name: string }): string {
    console.info(JSON.stringify(session))
    return this.appService.getHello()
  }

  /**
   *
   */
  @Get('/destory')
  destory(@Session() session: { name: string }): string {
    console.info('name', session.name)
    return this.appService.getHello()
  }
}
