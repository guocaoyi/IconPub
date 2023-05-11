import { Controller, Get, Delete } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('album')
@Controller('album')
export class AlbumController {
  /**
   * health check
   * @description app process health check
   */
  @Get('/:orgId/:album')
  albums() {
    return [
      { id: 1, name: 'album1', label: 'test album1', description: 'test album1' },
      { id: 2, name: 'album2', label: 'test album2', description: 'test album2' },
      { id: 3, name: 'album3', label: 'test album3', description: 'test album3' },
      { id: 4, name: 'album4', label: 'test album4', description: 'test album4' },
    ]
  }

  @Get('/all')
  getAllalbums() {
    return [
      { id: 1, name: 'album1', label: 'test album1', description: 'test album1' },
      { id: 2, name: 'album2', label: 'test album2', description: 'test album2' },
      { id: 3, name: 'album3', label: 'test album3', description: 'test album3' },
      { id: 4, name: 'album4', label: 'test album4', description: 'test album4' },
    ]
  }

  /**
   * delete
   * @description delete album by id
   */
  @Delete('/:id')
  async delete(): Promise<void> {
    Promise.resolve()
  }

  /**
   *
   */
}
