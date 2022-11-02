import { Controller, Get } from '@nestjs/common'

/**
 * app controller
 * @author yalda
 * @date 2022-08-10
 */
@Controller()
export class AppController {
  /**
   * health check
   * @description app process health check
   */
  @Get('/check')
  check(): string {
    return 'ok'
  }
}
