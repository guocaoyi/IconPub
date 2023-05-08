import { Controller, Get, Post } from '@nestjs/common'

import { IconService } from '../service/icon.service'

/**
 * project controller
 * @author yalda
 */
@Controller('project')
export class ProjectController {
  constructor(private readonly iconService: IconService) {}

  @Get('/')
  getProjects(): string {
    return ''
  }

  @Post('/')
  post(): void {
    //
  }
}
