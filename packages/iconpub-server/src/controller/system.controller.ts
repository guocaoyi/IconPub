import { Controller, Get } from '@nestjs/common'

/**
 * system controller
 * @author yalda
 * @date 2022-10-10
 */
@Controller('/system')
export class SystemController {
  /**
   * health check
   * @description app process health check
   * @description_zh 应用健康检查
   */
  @Get('/log')
  logs(): string[] {
    return ['ok']
  }

  /**
   * health check
   * @description app process health check
   * @description_zh 应用健康检查
   */
  @Get('/log:id')
  log(): string {
    return 'ok'
  }

  //
}
