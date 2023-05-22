import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger'
import { Body, Controller, Delete, Get, Param, Post, Put, Session, UseGuards } from '@nestjs/common'
import { Status, action } from 'src/enums/status.enum'
import { AlbumService } from 'src/services/album.service'
import { AuthGuard } from 'src/guards/auth.guard'
import { CreateAlbumDto } from 'src/models/album.dto'
import { Visibilities } from 'src/decorators/visite.decorator'
import { Visibility } from 'src/enums/visit.enum'

/**
 *
 */
@ApiTags('album')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Visibilities(Visibility.Public, Visibility.Private)
  @Post()
  createAlbum(@Body() createAlbumDto: CreateAlbumDto) {
    // check album name at same user or org
    // this.albumService.createAlbum(createAlbumDto)
  }

  /**
   * search all albums under current user
   */
  @Get('/all')
  albums() {
    return []
  }

  @Delete('/:aid')
  async delete(@Param('aid') aid: string): Promise<void> {
    Promise.resolve()
  }

  @ApiParam({ name: 'aid', description: 'album id' })
  @ApiParam({
    name: 'action',
    description: 'album status',
    enum: action,
  })
  @Put('/:aid/:action')
  action(@Param('aid') aid: string, @Param('action') action: Status) {
    //
  }

  @Get('action/:aid')
  getActions(@Session() session: { userId: number }, @Param('aid') aid: string) {
    //
  }
}
