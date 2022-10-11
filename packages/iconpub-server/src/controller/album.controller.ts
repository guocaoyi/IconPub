import { Controller, Get } from '@nestjs/common'

/**
 * album controller
 * @author yalda
 * @date 2022-10-10
 */
@Controller()
export class AlbumController {
  /**
   * health check
   * @description app process health check
   * @description_zh 应用健康检查
   */
  @Get('/check')
  check(): string {
    return 'ok'
  }
}
