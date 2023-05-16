import {
  Body,
  Controller,
  ConsoleLogger,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Session,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

import { IconDto, CreateIconDto, UpdateIconDto } from 'src/models/icon.dto'
import { IconService } from 'src/services/icon.service'

/**
 *
 */

@ApiTags('icon')
@Controller('icon')
export class IconController extends ConsoleLogger {
  constructor(private readonly iconService: IconService) {
    super()
  }

  @ApiBody({ type: CreateIconDto })
  @ApiResponse({ type: [IconDto] })
  @HttpCode(HttpStatus.OK)
  @Put()
  async create(
    @Session() session: { name: string; id: string },
    @Body() createIconDto: CreateIconDto,
  ): Promise<IconDto> {
    createIconDto.createdAt = Date.now()
    createIconDto.owner = session.id
    const icon = await this.iconService.create(createIconDto)
    icon.toObject()

    return new IconDto()
  }

  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateIconDto })
  @ApiResponse({ type: [IconDto] })
  @Post()
  async update(@Body() updateIconDto: UpdateIconDto): Promise<IconDto> {
    const icon = await this.iconService.update(updateIconDto)
    const iconDto = new IconDto()
    iconDto.id = icon.id
    iconDto.name = icon.name
    iconDto.description = icon.description
    return iconDto
  }

  @ApiParam({ name: 'cid', type: String })
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(HttpStatus.OK)
  @Post(':cid')
  uploadFile(@UploadedFile() file: Express.Multer.File): void {
    console.log(file)
  }

  @ApiParam({ name: 'cid', type: String })
  @HttpCode(HttpStatus.OK)
  @Delete(':cid')
  async delete(
    @Session() session: { name: string; id: string },
    @Param('cid') albumId: string,
  ): Promise<void> {
    await this.iconService.delete(albumId, session.id)
  }

  @ApiParam({ name: 'cid', type: String })
  @Put('frozen/:cid')
  async frozen(@Param('cid') id: string) {
    return ''
  }
}
