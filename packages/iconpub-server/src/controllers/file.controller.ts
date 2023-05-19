import { Controller, Logger } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

/**
 * @TODO
 * 1、upload file
 * 2、download file
 */
@ApiTags('file')
@Controller('file')
export class FileController {
  private readonly logger: Logger = new Logger(FileController.name)
}
