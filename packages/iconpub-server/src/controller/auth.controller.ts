import {
  Controller,
  Delete,
  Post,
  Put,
  Session,
  Redirect,
  ConsoleLogger,
  Body,
} from '@nestjs/common'
import { ApiBody, ApiTags } from '@nestjs/swagger'

import { AuthService } from 'src/service/auth.service'
import { UserService } from 'src/service/user.service'
import { CreateUserDto } from 'src/model/user.dto'

@ApiTags('auth')
@Controller()
export class AuthController extends ConsoleLogger {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    super()
  }

  @Put('/signup')
  @ApiBody({ type: CreateUserDto })
  signup(@Body() createUserDto: CreateUserDto) {
    // validate, check email, check name

    // create user

    // create profile
    // create user salt
    // encrypt password

    // create session

    // redirect to /login
    console.info(createUserDto)
    return ''
  }

  @Post('/signin')
  signin() {
    super.log('login')
    return ''
  }

  @Delete('/signout')
  @Redirect('index')
  signout(@Session() session: { name: string; id: string }): void {
    super.log(session.id, 'signout')
  }
}
