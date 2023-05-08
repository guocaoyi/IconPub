import { Controller, Get, Post } from '@nestjs/common'

/**
 * system controller
 * @author yalda
 */
@Controller('system')
export class SystemController {
  /**
   * health check
   * @description app process health check
   */
  @Get('/log')
  logs(): string[] {
    return ['ok']
  }

  /**
   * health check
   * @description app process health check
   */
  @Get('/log/stats')
  stats(): number {
    return 0
  }

  /**
   * health check
   * @description app process health check
   */
  @Post('/log/:id')
  details(): string {
    return 'ok'
  }
}
