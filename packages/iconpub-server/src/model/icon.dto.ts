import { ApiProperty, PickType } from '@nestjs/swagger'
import { OmitType } from '@nestjs/mapped-types'
import { IsNotEmpty } from 'class-validator'

export enum IconType {
  Icon = 'icon',
  Illu = 'illu',
  Svg = 'svg',
  Font = 'font',
}

/**
 * Icon
 */
export class IconDto {
  @ApiProperty()
  id: number

  @ApiProperty({
    type: Number,
    description: '',
    default: 1,
  })
  unicode: number

  @ApiProperty({
    type: Number,
    description: '',
    default: 1,
  })
  albumId: number

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
  createdAt: string

  @ApiProperty()
  updatedAt: string

  @ApiProperty()
  deletedAt: string
}

export class CreateIconDto extends OmitType(IconDto, []) {
  @ApiProperty()
  @IsNotEmpty()
  id: string

  @ApiProperty()
  @IsNotEmpty()
  albumId: string
}

export class UpdateIconDto extends PickType(IconDto, ['id'] as const) {}
