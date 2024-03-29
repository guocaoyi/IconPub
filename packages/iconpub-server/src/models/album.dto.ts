import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { IconType, icontype } from 'src/enums/type.enum'
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator'
import { Status, status } from 'src/enums/status.enum'
import { Visibility, visibility } from 'src/enums/visit.enum'
import { User } from 'src/schemas/user.schema'

export class AlbumDto {
  @ApiProperty()
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ name: 'description', description: 'description of album' })
  @MaxLength(200)
  @IsOptional()
  @IsString()
  description: string

  @ApiProperty({
    type: String,
    enum: icontype,
    description: 'icon type, default icon',
    default: IconType.Icon,
  })
  @IsEnum(icontype)
  @IsOptional()
  type: IconType

  @ApiProperty({
    type: String,
    description: 'visibility of album, default private',
    enum: visibility,
    default: Visibility.Private,
  })
  @IsEnum(visibility)
  @IsOptional()
  visibility: Visibility

  @ApiProperty({
    type: String,
    description: 'status of album, default actived',
    enum: status,
    default: Status.Actived,
  })
  @IsEnum(status)
  @IsOptional()
  status: Status

  /**
   * owner can visitadddelete items(icon), achievedelete album
   */
  owner: User

  /**
   * contributor can read and write and delete items(icon)
   */
  contributors: User[]

  @ApiProperty()
  count: number

  @ApiProperty({
    required: true,
    description: 'tags',
    isArray: true,
    default: [],
  })
  @MaxLength(30)
  @IsNotEmpty()
  @IsArray()
  @ValidateIf((e) => e.type === 1)
  tags: string[]

  @ApiProperty({
    required: true,
    description: 'icons',
    isArray: true,
    default: [],
  })
  @MaxLength(1000)
  @MinLength(0)
  @IsNotEmpty()
  @IsArray()
  icons: string[]
}

/**
 *
 */
export class CreateAlbumDto extends PickType(AlbumDto, [
  'name',
  'tags',
  'type',
  'status',
  'visibility',
]) {}

/**
 *
 */
export class UpdateAlbumDto extends PartialType(
  PickType(AlbumDto, ['name', 'tags', 'type' as const]),
) {}

/**
 *
 */
export class AddAlbumItemsDto extends PickType(AlbumDto, ['icons']) {}

/**
 *
 */
export class UpdateAlbumItemsDto extends PickType(AlbumDto, ['icons']) {}
