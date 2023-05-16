import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Session,
  Logger,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common'
import { ApiParam, ApiHeader, ApiTags, ApiQuery } from '@nestjs/swagger'

import { Roles } from 'src/decorators/roles.decorator'
import { Role } from 'src/models/enum/role.enum'
import { UserService } from 'src/services/user.service'
import { AuthGuard } from 'src/guards/auth.guard'

@ApiTags('user')
@Controller('user')
export class UserController {
  private readonly logger: Logger = new Logger(UserController.name)

  constructor(private readonly userService: UserService) {}

  @ApiHeader({ required: true, name: 'Authorization', description: 'Bearer *token*' })
  @UseGuards(AuthGuard)
  @Get()
  profile(@Request() req: any) {
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
    const users = await this.userService.queryByName(name)
    return users?.map((user) => ({ name: user, id: user._id })) ?? []
  }
}
