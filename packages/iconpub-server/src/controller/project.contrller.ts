import { Controller, Get } from '@nestjs/common'

import { IconService } from '../service/icon.service'

/**
 * project controller
 * @author yalda
 * @date 2022-10-09
 */
@Controller('project')
export class ProjectController {
  constructor(private readonly iconService: IconService) {}

  @Get('/')
  getProjects(): string {
    return ''
  }
}
