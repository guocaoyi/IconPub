import * as assert from 'node:assert'
import {
  Controller,
  Post,
  Put,
  Logger,
  Request,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { ApiBody, ApiTags } from '@nestjs/swagger'

import { AuthGuard } from 'src/guards/auth.guard'
import { SignDto, ResetPassDto } from 'src/models/auth.dto'
import { CreateUserDto } from 'src/models/user.dto'
import { AuthService } from 'src/services/auth.service'
import { UserService } from 'src/services/user.service'

@ApiTags('auth')
@Controller()
export class AuthController {
  private readonly logger: Logger = new Logger(AuthController.name)

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /**
   * sign up
   */
  @ApiBody({ type: CreateUserDto })
  @Put('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const password = Buffer.from(createUserDto.password, 'base64').toString()

    // validate, check email, check name
    const hasUser = await this.userService.hasUser(createUserDto.username, createUserDto.email)
    this.logger.debug(hasUser)
    assert.ok(!hasUser, 'user already exists')

    // create user

    // create profile
    // create user salt
    // encrypt password

    // create session

    // redirect to /

    return this.authService.signUp(createUserDto.username, password)
  }

  /**
   * sign in
   */
  @ApiBody({ type: SignDto })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: SignDto) {
    // decode base64 to string
    const password = Buffer.from(dto.password, 'base64').toString()

    this.logger.debug(dto.account, password)
    return this.authService.signIn(dto.account, password)
  }

  /**
   * modify password
   */
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
