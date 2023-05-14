import { ApiProperty } from '@nestjs/swagger'
import { PartialType, PickType, OmitType } from '@nestjs/mapped-types'
import { IsBase64, IsEmail, IsNotEmpty, MinLength } from 'class-validator'

/**
 * basic user dto
 */
export class UserDto {
  @ApiProperty({ type: String })
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  bio: string

  @ApiProperty()
  organization: string[]

  @ApiProperty()
  avatar: string

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty()
  salt: string

  @ApiProperty()
  createdAt: string

  @ApiProperty()
  updatedAt: string

  @ApiProperty()
  deletedAt?: string
}

/**
 *
 */
export class UserInfoDto extends OmitType(UserDto, ['id', 'password', 'salt']) {}

/**
 * limited user
 * just for add user to album, search all platform user
 */
export class UpdateUserDto extends PartialType(UserDto) {}

/**
 * limited user
 * just for add user to album, search all platform user
 */
export class CreateUserDto extends PickType(UserDto, ['name', 'email', 'password']) {
  @ApiProperty({
    type: String,
    description: 'username, min length more than 4',
    default: 'iconpub',
  })
  @IsNotEmpty()
  @MinLength(4)
  name: string

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({
    type: String,
    description: 'passwork, encode by base64, min length more than 10',
    default: 'changeme',
  })
  @IsNotEmpty()
  @IsBase64()
  @MinLength(10)
  password: string
}

/**
 * limited user
 * just for add user to album, search all platform user
 */
export class LimitedUserDto extends PickType(UserDto, ['id', 'name']) {}
