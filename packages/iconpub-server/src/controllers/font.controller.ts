import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Controller, Logger, UseGuards } from '@nestjs/common'
import { AuthGuard } from 'src/guards/auth.guard'

@ApiTags('fone')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('fone')
export class FontController {
  private readonly logger: Logger = new Logger(FontController.name)

  //
}
