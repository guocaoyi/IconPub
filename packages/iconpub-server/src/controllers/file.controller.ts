import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Logger, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { FileUploadDto, FilesUploadDto } from 'src/models/file.dto'
import { AuthGuard } from 'src/guards/auth.guard'
import { FileInterceptor } from '@nestjs/platform-express'

interface File {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  buffer: Buffer
  size: number
}

@ApiTags('file')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('file')
export class FileController {
  private readonly logger: Logger = new Logger(FileController.name)

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'icon file',
    type: FileUploadDto,
  })
  @ApiOkResponse()
  uploadFile(@UploadedFile() file: File) {
    console.info(file.size)

    return []
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of icon files',
    type: FilesUploadDto,
  })
  @ApiOkResponse()
  uploadFiles(@UploadedFile() files: File[]) {
    console.info(files.length)
    console.info(files?.[1]?.size)

    return []
  }
}
