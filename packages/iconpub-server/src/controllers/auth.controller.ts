import * as assert from 'node:assert'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { Body, Controller, HttpCode, HttpStatus, Logger, Post, Put } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { CreateUserDto } from 'src/models/user.dto'
import { SignDto } from 'src/models/auth.dto'
import { AuthService } from 'src/services/auth.service'
import { UserService } from 'src/services/user.service'

@ApiTags('auth')
@Controller()
export class AuthController {
  private readonly logger: Logger = new Logger(AuthController.name)

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * sign up
   */
  @ApiBody({ type: CreateUserDto })
  @Put('signup')
  async signup(@Body() dto: CreateUserDto) {
    // validate, check email, check name
    const user = await this.userService.queryUserByNameAndEmail(dto.username, dto.email)
    this.logger.debug(user)
    assert.ok(!user, 'user already exists')

    // create user

    // create profile
    // create user salt
    // encrypt password

    // create session

    // redirect to /

    return this.authService.signUp(dto)
  }

  /**
   * sign in
   */
  @ApiBody({ type: SignDto })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() dto: SignDto) {
    this.logger.debug(`${dto.account} sigin`)
    // check user
    const user = await this.userService.queryUserByName(dto.account)
    console.info(JSON.stringify(user, null, 2))
    assert.ok(!!user, 'user do not exists')

    // sign in
    const result = this.authService.comparePassword(dto.password, user.password, user.salt)
    assert.ok(result, 'password do not match')

    const payload = {
      //@ts-ignore
      id: user._id,
      username: user.username,
    }

    return {
      token: await this.jwtService.signAsync(payload),
    }
  }
}
