import { Role } from 'src/enums/role.enum'
import { SetMetadata } from '@nestjs/common'

export const ROLE_METADATA = 'role_metadata'
export const Roles = (...roles: Role[]) => SetMetadata(ROLE_METADATA, roles)
export { Role }
