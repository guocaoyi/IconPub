export class AlbumFormPo {}

import { AccountPo } from './AccountPo'

export class GroupPo {}

/**
 * album po
 */
export class AlbumPo {
  id: number

  name: string

  description: string

  logo: string

  ownerId: string

  authorInfo: AccountPo[]

  ownerInfo: AccountPo

  readerInfo: AccountPo[]

  resourceCount: number

  tags: string[]

  subgroupInfo: GroupPo[]

  extraInfo: { tags: string[]; subgroupInfo: GroupPo[] }

  type: 0 | 1 | 2 | 3 // 0: icon, 1: illu, 2: lottie, 3: illu3

  createdAt: string

  updatedAt: string
}
