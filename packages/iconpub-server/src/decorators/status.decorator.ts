import { SetMetadata } from '@nestjs/common'
import { Status as StatusEnum } from 'src/enums/status.enum'

export const STATUS_METADATA = 'status_metadata'
export const Statuss = (...status: StatusEnum[]) => SetMetadata(STATUS_METADATA, status)
