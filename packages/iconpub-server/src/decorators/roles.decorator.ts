import { SetMetadata } from '@nestjs/common'

import { Role } from 'src/models/enum/role.enum'

export const ROLE_METADATA = 'role_metadata'
export const Roles = (...roles: Role[]) => SetMetadata(ROLE_METADATA, roles)
export { Role }
