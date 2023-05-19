import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Session,
  Logger,
} from '@nestjs/common'
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

import { IconDto, CreateIconDto, UpdateIconDto } from 'src/models/icon.dto'
import { IconService } from 'src/services/icon.service'
import { Roles, Role } from 'src/decorators/roles.decorator'

@ApiTags('icon')
@Controller('icon')
export class IconController {
  private readonly logger = new Logger(IconController.name)

  constructor(private readonly iconService: IconService) {}

  @ApiBody({ type: CreateIconDto })
  @ApiResponse({ type: [IconDto] })
  @HttpCode(HttpStatus.OK)
  @Put()
  async upload(
    @Session() session: { name: string; id: string },
    @Body() createIconDto: CreateIconDto,
  ): Promise<IconDto> {
    // createIconDto.owner = session.id

    const icon = await this.iconService.create(createIconDto)
    icon.toObject()

    return new IconDto()
  }

  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateIconDto })
  @ApiResponse({ status: '2XX', type: IconDto })
  @Post()
  async setAlbum(@Body() updateIconDto: UpdateIconDto): Promise<IconDto> {
    const icon = await this.iconService.update(updateIconDto)
    const iconDto = new IconDto()
    iconDto.id = icon.id
    iconDto.name = icon.name
    iconDto.description = icon.description
    return iconDto
  }

  @ApiParam({ name: 'cid', type: String })
  @HttpCode(HttpStatus.OK)
  @Roles(Role.Admin, Role.Owner, Role.Contributor)
  @Delete(':cid')
  async delete(
    @Session() session: { name: string; id: string },
    @Param('cid') albumId: string,
  ): Promise<void> {
    await this.iconService.delete(albumId, session.id)
  }

  @ApiParam({ name: 'cid', type: String })
  @HttpCode(HttpStatus.OK)
  @Roles(Role.Admin, Role.Owner, Role.Contributor)
  @Delete('/destory/:cid')
  async destory(
    @Session() session: { name: string; id: string },
    @Param('cid') albumId: string,
  ): Promise<void> {
    await this.iconService.delete(albumId, session.id)
  }
}
