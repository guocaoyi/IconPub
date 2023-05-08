import { Controller, Get, Delete } from '@nestjs/common'

/**
 * album controller
 * @author yalda
 */
@Controller('album')
export class AlbumController {
  /**
   * health check
   * @description app process health check
   */
  @Get('/:id')
  albums(): string {
    return 'ok'
  }

  /**
   * delete
   * @description delete album by id
   */
  @Delete('/:id')
  async delete(): Promise<void> {
    Promise.resolve()
  }
}
