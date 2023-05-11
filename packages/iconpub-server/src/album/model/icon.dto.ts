import { ApiProperty, PickType } from '@nestjs/swagger'

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

  /** unicode hex */
  @ApiProperty({
    required: true,
    type: String,
    description: 'icon ablum id',
    default: 1,
  })
  unicodeHex: string

  @ApiProperty({
    type: Number,
    description: 'icon ablum id',
    default: 1,
  })
  unicode: number

  @ApiProperty({
    type: Number,
    description: 'icon ablum id',
    default: 1,
  })
  albumId: number

  @ApiProperty({
    type: String,
    default: 'symbol of icon',
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
  deletedAt?: string
}

export class IconForm extends IconDto {}

export class UpdateIconDto extends PickType(IconDto, ['id'] as const) {}
