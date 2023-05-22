import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import {
  IsBase64,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator'

export class UserDto {
  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial)
  }

  @ApiProperty({
    type: String,
    description: 'username, min length more than 4',
    default: 'iconpub',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(4)
  username: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(200)
  bio: string

  @ApiProperty()
  @IsOptional()
  organization: string[]

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  avatar: string

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({
    type: String,
    description: 'passwork, encode by base64, min length more than 6',
    default: 'changeme',
  })
  @IsNotEmpty()
  // @IsBase64()
  // @MinLength(10)
  password: string

  // get passwork(): string {
  //   return Buffer.from(this.password, 'base64').toString()
  // }

  @ApiProperty({ default: '' })
  @IsOptional()
  @MaxLength(200)
  url: string
}

export class CreateUserDto extends PickType(UserDto, ['username', 'email', 'password']) {}

export class UpdateUserDto extends PartialType(PickType(UserDto, ['avatar', 'bio', 'email'])) {}

export class UserInfoDto extends PickType(UserDto, ['username']) {}
