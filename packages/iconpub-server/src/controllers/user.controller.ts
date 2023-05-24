import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger'
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  Query,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common'

import { Req } from 'src/interfaces/session.interface'
import { Role, Roles } from 'src/decorators/roles.decorator'
import { AuthGuard } from 'src/guards/auth.guard'
import { ResetPassDto } from 'src/models/auth.dto'
import { UserService } from 'src/services/user.service'

@ApiTags('user')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  private readonly logger: Logger = new Logger(UserController.name)

  constructor(private readonly userService: UserService) {}

  @Get()
  profile(@Request() req: Req) {
    this.logger.debug(JSON.stringify(req.user, null, 2))
    return req.user
  }

  /**
   * update account
   */
  @Post()
  update(@Param('uid') uid: string): string {
    return ''
  }

  /**
   * destory account
   */
  @Delete()
  destory(@Param('uid') uid: string, @Session() session: { name: string }): string {
    // check album owner

    // delete all icons
    // delete all albums

    //
    return ''
  }

  @ApiParam({ name: 'uid', description: 'user id' })
  @Roles(Role.Admin)
  @Get(':uid')
  getInfoById(@Param('uid') uid: string): string {
    return ''
  }

  @ApiQuery({ name: 'name', description: 'user name' })
  @Get('search')
  async search(@Query('name') name: string) {
    const users = await this.userService.queryUsersByNameReg(name)
    return users?.map((user) => ({ name: user, id: user.id })) ?? []
  }

  @ApiBody({ type: ResetPassDto })
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Put('newpass')
  modify(@Request() req: Request, @Body() resetPassDto: ResetPassDto) {
    // req.user.salt
    // validate old password
    // this.authService.comparePassword(resetPassDto.password, resetPassDto.newPassword)
    // new password
    // modify password
    // return success
  }
}
