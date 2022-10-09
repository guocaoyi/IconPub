import { Controller, Get } from '@nestjs/common'

import { IkonService } from '../service/ikon.service'

/**
 * project controller
 * @author yalda
 * @date 2020-10-09
 */
@Controller('/project')
export class ProjectController {
  constructor(private readonly ikonService: IkonService) {}

  @Get('/')
  getProjects(): string {
    return ''
  }
}
