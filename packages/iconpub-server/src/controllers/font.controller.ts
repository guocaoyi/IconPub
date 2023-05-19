import { Controller, Logger } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

/**
 * @TODO
 * 1、generate iconfont
 */
@ApiTags('fone')
@Controller('fone')
export class FontController {
  private readonly logger: Logger = new Logger(FontController.name)
}
