import { ApiConsumes } from '@nestjs/swagger'
/**
 *
 */
export class ObjectStorageDto {
  id: number

  ownerId: string
  groupId: number
  iconCount: number

  isOutdated: true

  fileSize: number
  legacyFileSize: number

  legacyWebUri: string
  previewUri: string
  typeUri: string
  webUri: string
}
