import { Controller, Get, Param, Body, Post, Put, Delete, Session } from '@nestjs/common'
import { ApiParam, ApiTags } from '@nestjs/swagger'

import { Roles } from 'src/decorators/roles.decorator'
import { Role } from 'src/models/enum/role.enum'
import { AlbumService } from 'src/services/album.service'
import { CreateAlbumDto } from 'src/models/album.dto'
import { Statuss } from 'src/decorators/status.decorator'
import { Status, action } from 'src/models/enum/status.enum'
import { Visibilities } from 'src/decorators/visite.decorator'
import { Visibility } from 'src/models/enum/visit.enum'

/**
 * @TODO
 * 1、create album: POST /api/album
 * 2、delete album: DELETE /api/album/:aid
 * 3、search album info: GET /api/album/:aid
 *
 * 4、fork album: PUT /api/album/fork
 * 5、change visibility POST: /api/album/visibility
 * 6、transfer ownership POST: /api/album/transfer
 *
 * 7、更新相册（上传图标、删除图标、更新图标、迁移图标、复制图标）
 * 8、PUT /api/album/:aid/:{status|active}
 * 9、add contributors: POST /api/album/:aid/contributors
 * 11、update album info(base info): POST /api/album/:aid
 * 12、编辑相册远程存储配置
 */
@ApiTags('album')
@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Visibilities(Visibility.Public, Visibility.Private)
  @Post()
  createAlbum(@Session() session: { userId: number }, @Body() createAlbumDto: CreateAlbumDto) {
    // check album name at same user or org
  }

  /**
   * search all albums under current user
   */
  @Roles(Role.Admin, Role.Owner, Role.Contributor)
  @Get('/all')
  albums(@Session() session: { userId: number }) {
    return []
  }

  @Roles(Role.Admin, Role.Owner)
  @Delete('/:aid')
  async delete(@Session() session: { userId: number }, @Param('aid') aid: string): Promise<void> {
    Promise.resolve()
  }

  @ApiParam({ name: 'aid', description: 'album id' })
  @ApiParam({
    name: 'action',
    description: 'album status',
    enum: action,
  })
  @Statuss(Status.Actived)
  @Put('/:aid/:action')
  action(
    @Session() session: { userId: number },
    @Param('aid') aid: string,
    @Param('action') action: Status,
  ) {
    //
  }

  @Get('action/:aid')
  getActions(@Session() session: { userId: number }, @Param('aid') aid: string) {
    //
  }
}
