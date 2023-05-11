import { Controller, Delete, Get, Post, Session } from '@nestjs/common'

import { UserService } from '../service/user.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  /**
   *
   */
  @Get('/info')
  info(@Session() session: { name: string }): string {
    console.info(JSON.stringify(session))
    return this.userService.getHello()
  }

  /**
   *
   */
  @Delete()
  destoryById(@Session() session: { name: string }): string {
    // check album owner
    // check org owner

    // delete all icons
    // delete all albums
    // delete all orgs
    return this.userService.getHello()
  }

  @Get('/:id')
  getInfoById(): string {
    return this.userService.getHello()
  }

  @Post('/signout/:id')
  signout(): string {
    return this.userService.getHello()
  }

  /**
   * destory account
   */
  @Post('/destory/:id')
  destory(): string {
    return this.userService.getHello()
  }

  /**
   * update account
   */
  @Post('/update/:id')
  update(): string {
    return this.userService.getHello()
  }
}
