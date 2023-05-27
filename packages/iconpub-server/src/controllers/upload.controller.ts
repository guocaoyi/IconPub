import * as fs from 'node:fs'
import * as path from 'node:path'
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import {
  Controller,
  FileTypeValidator,
  Logger,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Request,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'

import { Req } from 'src/interfaces/session.interface'
import { AuthGuard } from 'src/guards/auth.guard'
import { FileUploadDto, FilesUploadDto } from 'src/models/file.dto'

@ApiTags('upload')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('upload')
export class UploadController {
  private readonly logger: Logger = new Logger(UploadController.name)

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ status: '2XX', type: String })
  @ApiBody({
    description: 'icon file',
    type: FileUploadDto,
  })
  @Post()
  uploadFile(
    @Request() req: Req,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 1 }),
          new FileTypeValidator({ fileType: /image\/*/gi }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): string {
    fs.writeFileSync(path.join(file.originalname), file.buffer, 'binary')

    // req.user.id
    console.info(req.user.id)
    return 'ok'
  }

  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ status: '2XX', type: String })
  @ApiBody({
    description: 'List of icon files',
    type: FilesUploadDto,
  })
  @Post('multiple')
  uploadFiles(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 1 }),
          new FileTypeValidator({ fileType: /image\/*/gi }),
        ],
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    console.info(files.length)
    console.info(files?.[1]?.size)

    return []
  }

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ status: '2XX', type: String })
  @ApiBody({
    description: 'icon files zip',
    type: FileUploadDto,
  })
  @Post('zip')
  uploadZip(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 20 }),
          new FileTypeValidator({ fileType: /\.zip$/gi }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.info(file?.size)
    return []
  }
}
