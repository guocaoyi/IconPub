import { Controller, Get } from '@nestjs/common'

/**
 * app controller
 * @author yalda
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
