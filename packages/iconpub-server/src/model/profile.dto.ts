import { ApiProperty } from '@nestjs/swagger'
import { PartialType, OmitType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsEmail, IsUrl } from 'class-validator'

/**
 * profile dto
 */
export class ProfileDto {
  @ApiProperty({ required: true })
  id: string

  @ApiProperty()
  name: string

  @ApiProperty({ default: '' })
  bio: string

  @ApiProperty({ type: [String], default: [] })
  organization: string[]

  @ApiProperty({ default: '' })
  avatar: string

  @ApiProperty({ default: '' })
  email: string

  @ApiProperty({ default: '' })
  url: string
}

/**
 * profile create dto
 */
export class CreateProfileDto extends PartialType(OmitType(ProfileDto, ['id'])) {
  @ApiProperty()
  @IsNotEmpty()
  name: string
}

/**
 * profile update dto
 */
export class UpdateProfileDto extends PartialType(OmitType(ProfileDto, ['id'])) {
  @ApiProperty()
  @IsNotEmpty()
  name: string

  @ApiProperty({ default: '' })
  bio?: string

  @ApiProperty({ type: [String], default: [] })
  organization?: string[]

  @ApiProperty({ default: '' })
  @IsUrl()
  avatar?: string

  @ApiProperty({ default: '' })
  @IsEmail()
  email?: string

  @ApiProperty({ default: '' })
  @IsUrl()
  url?: string
}
