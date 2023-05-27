import { ApiProperty, PickType } from '@nestjs/swagger'
import { IsBase64, IsNotEmpty, IsString, MinLength } from 'class-validator'
import { UserDto } from 'src/models/user.dto'

export class SignDto extends PickType(UserDto, ['password']) {
  @ApiProperty({
    required: true,
    type: String,
    description: 'accout, username or email',
  })
  @IsString()
  account: string
}

export class ResetPassDto extends PickType(UserDto, ['password']) {
  @ApiProperty({
    required: true,
    type: String,
    description: 'new passwork, encode by base64, min length more than 6',
  })
  @IsNotEmpty()
  @IsBase64()
  @MinLength(10)
  newPassword: string
}
