import { Controller, Get, Session } from '@nestjs/common'
import { AppService } from '../service/app.service'

/**
 * account controller
 * @author yalda
 * @date 2022-08-10
 */
@Controller('account')
export class AccountController {
  constructor(private readonly appService: AppService) {}

  /**
   * 返回账号信息
   */
  @Get()
  getHello(@Session() session: { name: string }): string {
    console.info(JSON.stringify(session))
    return this.appService.getHello()
  }
}
