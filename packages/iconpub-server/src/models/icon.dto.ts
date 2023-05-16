import { ApiProperty, PickType, OmitType, PartialType } from '@nestjs/swagger'
import { IsNumberString, IsOptional } from 'class-validator'
import { IsNotEmpty, Max } from 'class-validator'

export type IconType = 'icon' | 'illu' | 'svg' | 'font'

export interface IIcon {
  id: number

  name: string

  symbol: string

  unicode: number

  description: string

  type: IconType

  albumId: string

  owner: string

  tags: string[]

  extraInfo: string

  fontClass: string /** font class */

  pathAttributes: string

  showSvg: string
}

/**
 * icon dto
 */
export class IconDto {
  @ApiProperty()
  id: number

  @ApiProperty({
    type: String,
    default: 'name of icon',
  })
  name: string

  @ApiProperty({
    type: String,
    default: 'symbol of icon',
  })
  symbol: string

  @ApiProperty({
    type: Number,
    description: '',
    default: 1,
  })
  unicode: number

  @ApiProperty({
    type: String,
    default: '',
  })
  description: string

  @ApiProperty({
    type: String,
    description: 'type of icon',
    default: 'icon',
    enum: ['Icon', 'Illu', 'Svg', 'Font'],
  })
  type: IconType

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  albumId: string

  @ApiProperty({
    type: String,
    description: 'owner id',
    default: '',
  })
  owner: string

  @ApiProperty({
    type: [String],
    description: 'tags of icon',
    default: [],
  })
  tags: string[]

  @ApiProperty()
  extraInfo: string

  @ApiProperty()
  fontClass: string /** font class */

  @ApiProperty()
  pathAttributes: string

  @ApiProperty()
  showSvg: string

  @ApiProperty()
  createdAt: number

  @ApiProperty()
  updatedAt: number

  @ApiProperty()
  deletedAt: number
}

export class CreateIconDto extends PickType(IconDto, [
  'symbol',
  'name',
  'description',
  'albumId',
  'tags',
  'owner' as const,
  'createdAt' as const,
]) {
  @ApiProperty()
  @IsNotEmpty()
  symbol: string

  @ApiProperty()
  @IsNotEmpty()
  @Max(50)
  name: string

  @ApiProperty()
  @IsNotEmpty()
  description: string

  @ApiProperty()
  @IsNotEmpty()
  albumId: string

  @ApiProperty({ default: [] })
  @IsNotEmpty()
  tags: string[]

  @ApiProperty({
    default: Date.now(),
    nullable: true,
  })
  @IsOptional()
  @IsNumberString()
  createdAt: number = Date.now()
}

export class UpdateIconDto extends PickType(IconDto, ['id', 'albumId', 'createdAt'] as const) {
  @ApiProperty({
    default: Date.now(),
  })
  @IsNotEmpty()
  @IsNumberString()
  updatedAt: number = Date.now()
}
