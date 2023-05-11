import { Body, Controller, Delete, Param, Post, Session } from '@nestjs/common'
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

import { IconDto, IconForm } from '../model/icon.dto'
import { Icon } from '../model/icon.schema'
import { IconService } from '../service/icon.service'

@ApiTags('icon')
@Controller('icon')
export class IconController {
  constructor(private readonly iconService: IconService) {}

  @ApiBody({ type: IconForm })
  @ApiResponse({ type: [IconDto] })
  @Post('save')
  async save(@Body() iconForm: IconForm): Promise<IconDto> {
    const icon = new Icon()
    icon.createdAt = Date.now()

    const createIcon = await this.iconService.create(icon)
    return createIcon
  }

  @Delete('/:id')
  async delete(
    @Session() session: { name: string; id: string },
    @Param('id') albumId: string,
  ): Promise<void> {
    await this.iconService.delete(albumId, session.id)
  }
}
