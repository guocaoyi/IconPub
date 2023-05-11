import { ApiProperty, OmitType } from '@nestjs/swagger'

export class SimpleUserDto {
  @ApiProperty({
    type: String,
    description: 'The age of a cat',
    default: 1,
  })
  id: string

  @ApiProperty({ type: String })
  name: string
}

export class UserDto {
  @ApiProperty({
    type: String,
    description: 'The age of a cat',
    minimum: 1,
    default: 1,
  })
  id: string

  @ApiProperty()
  org: string[]

  @ApiProperty()
  avatar: string

  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  userId: string

  @ApiProperty()
  userType: 1

  @ApiProperty()
  orgs: string[]

  @ApiProperty()
  salt: string

  @ApiProperty()
  password: string

  @ApiProperty()
  createdAt: string

  @ApiProperty()
  updatedAt: string

  @ApiProperty()
  deletedAt?: string
}
