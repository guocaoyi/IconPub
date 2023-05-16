import { SetMetadata } from '@nestjs/common'

import { Status as StatusEnum } from 'src/models/enum/status.enum'

export const STATUS_METADATA = 'status_metadata'
export const Status = (...status: StatusEnum[]) => SetMetadata(STATUS_METADATA, status)
