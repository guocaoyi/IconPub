import { SetMetadata } from '@nestjs/common'
import { Visibility } from 'src/enums/visit.enum'

export const VISITE_METADATA = 'visite_metadata'
export const Visibilities = (...visibilities: Visibility[]) =>
  SetMetadata(VISITE_METADATA, visibilities)
