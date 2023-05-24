import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, MaxLength, MinLength } from 'class-validator'

export class FileUploadDto {
  albumId: string

  @ApiProperty({ type: 'string', format: 'binary' })
  @IsNotEmpty()
  file: any
}

export class FilesUploadDto {
  @ApiProperty({
    type: 'array',
    items: { nullable: false, type: 'string', format: 'binary', maxLength: 10, minLength: 1 },
  })
  @IsNotEmpty()
  @IsArray()
  @MinLength(1)
  @MaxLength(10)
  files: any[]
}
