import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { AccountDto } from 'src/models/dto/account.dto'
import { AppService } from 'src/service/app.service'

/**
 * @author yalda
 */
@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  /**
   * render home page
   */
  @Get()
  root(@Res() res: Response) {
    return res.render('index')
  }

  @Post('/api/create/cat')
  create(@Body() body: any) {
    const account = new AccountDto()
    account.name = body.name
    account.email = body.email
    return this.appService.create(account)
  }

  @Get('/api/find/all')
  findAll() {
    return this.appService.findAll()
  }
}
