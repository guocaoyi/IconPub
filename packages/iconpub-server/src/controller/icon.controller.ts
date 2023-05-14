import {
  Body,
  Controller,
  Put,
  ConsoleLogger,
  Delete,
  Param,
  Post,
  Session,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'

import { IconDto, CreateIconDto, UpdateIconDto } from 'src/model/icon.dto'
import { Icon } from 'src/model/icon.schema'
import { IconService } from 'src/service/icon.service'

@ApiTags('icon')
@Controller('icon')
export class IconController extends ConsoleLogger {
  constructor(private readonly iconService: IconService) {
    super()
  }

  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: CreateIconDto })
  @ApiResponse({ type: [IconDto] })
  @Put()
  async create(@Body() createIconDto: CreateIconDto): Promise<Icon> {
    const createIcon = await this.iconService.create(createIconDto)
    return createIcon
  }

  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateIconDto })
  @ApiResponse({ type: [IconDto] })
  @Post()
  async update(@Body() iconDet: UpdateIconDto): Promise<IconDto> {
    const icon = await this.iconService.update(iconDet)
    const iconDto = new IconDto()
    iconDto.id = icon.id
    iconDto.name = icon.name
    iconDto.description = icon.description
    return iconDto
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async delete(
    @Session() session: { name: string; id: string },
    @Param('id') albumId: string,
  ): Promise<void> {
    await this.iconService.delete(albumId, session.id)
  }

  @HttpCode(HttpStatus.OK)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
  }
}
