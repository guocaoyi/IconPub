import { ApiProperty, PickType } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, Max, MaxLength, Min, MinLength } from 'class-validator'

export type IconType = 'icon' | 'illu' | 'svg' | 'font'

export class IconDto {
  @ApiProperty()
  id: string

  @ApiProperty({
    type: String,
    default: 'name of icon',
  })
  @IsNotEmpty()
  @MaxLength(50)
  name: string

  @ApiProperty({
    type: String,
    default: 'symbol of icon',
  })
  @IsNotEmpty()
  @MaxLength(12)
  symbol: string

  @ApiProperty({
    type: Number,
    description: '',
    default: 1,
  })
  @IsNotEmpty()
  @Max(65000)
  @Min(25000)
  unicode: number

  @ApiProperty({
    type: String,
    default: '',
  })
  @IsNotEmpty()
  @MaxLength(200)
  description: string

  @ApiProperty({
    type: String,
    default: '',
  })
  @IsNotEmpty()
  @MaxLength(200)
  svg: string

  @ApiProperty({
    type: String,
    default: '',
  })
  @IsNotEmpty()
  @MaxLength(200)
  file: string

  @ApiProperty({
    type: String,
    description: 'color',
    default: '#999',
  })
  fill: string

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  @IsNotEmpty()
  albumId: string

  @ApiProperty({
    type: String,
    description: 'owner id',
    default: '',
  })
  @IsNotEmpty()
  @MaxLength(1)
  owner: string[]

  @ApiProperty({
    type: [String],
    description: 'tags of icon',
    default: [],
  })
  @IsNotEmpty()
  @IsOptional()
  @MinLength(1)
  @MaxLength(20)
  tags: string[]

  @ApiProperty()
  extraInfo: string

  @ApiProperty()
  fontClass: string

  @ApiProperty()
  pathAttributes: string

  @ApiProperty()
  showSvg: string

  @ApiProperty({
    default: Date.now(),
    nullable: true,
  })
  createdAt: number = Date.now()

  @ApiProperty({
    default: Date.now(),
    nullable: true,
  })
  updatedAt: number
}

export class CreateIconDto extends PickType(IconDto, [
  'symbol',
  'name',
  'description',
  'albumId',
  'tags',
]) {}

export class UpdateIconDto extends PickType(IconDto, ['id' as const, 'albumId'] as const) {}
