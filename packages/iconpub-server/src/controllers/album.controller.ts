import { Controller, Get, Param, Body, Post, Put, Delete, Session } from '@nestjs/common'
import { ApiParam, ApiTags } from '@nestjs/swagger'

import { Roles } from 'src/decorators/roles.decorator'
import { Role } from 'src/models/enum/role.enum'
import { AlbumService } from 'src/services/album.service'

import { CreateAlbumDto } from 'src/models/album.dto'
import { Status, action } from 'src/models/enum/status.enum'

/**
 * 1、create album: POST /api/album
 * 2、delete album: DELETE /api/album/:aid
 * 3、search album info: GET /api/album/:aid
 * 4、更新相册（上传图标、删除图标、更新图标、迁移图标、复制图标）
 * 5、查询相册下的所有图标
 * 6、查询相册管理员
 * 7、添加相册管理员
 * 8、删除相册管理员
 * 9、查询相册成员
 * 10、添加相册成员
 * 11、编辑相册信息（名称、标签、LOGO等）
 * 12、编辑相册远程存储配置

 * @TODO GET /api/album/:aid/:{status|active}
 */
@ApiTags('album')
@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  createAlbum(@Session() session: { userId: number }, @Body() createAlbumDto: CreateAlbumDto) {
    //
  }

  /**
   * search all albums under current user
   */
  @Roles(Role.Admin, Role.Owner)
  @Get('/all')
  getAllalbums(@Session() session: { userId: number }) {
    return [
      { id: 1, name: 'album1', label: 'test album1', description: 'test album1' },
      { id: 2, name: 'album2', label: 'test album2', description: 'test album2' },
      { id: 3, name: 'album3', label: 'test album3', description: 'test album3' },
      { id: 4, name: 'album4', label: 'test album4', description: 'test album4' },
    ]
  }

  @Get('all')
  getAlbums(@Session() session: { userId: number }) {
    // return own albums & public albums
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
  @Put('/:aid/:action')
  action(
    @Session() session: { userId: number },
    @Param('aid') aid: string,
    @Param('action') action: Status,
  ) {
    //
  }

  @Get('history/:aid')
  history(@Session() session: { userId: number }, @Param('aid') aid: string) {
    //
  }
}
