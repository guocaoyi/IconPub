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

  /** 所有者 */
  ownerInfo: AccountPo

  /** 参与者 */
  readerInfo: AccountPo[]

  /** 项目下辖图标数 */
  resourceCount: number

  tags: string[]

  subgroupInfo: GroupPo[]

  extraInfo: { tags: string[]; subgroupInfo: GroupPo[] }

  type: 0 | 1 | 2 | 3 // 0: icon, 1: illu, 2: lottie, 3: illu3

  createdAt: string

  updatedAt: string
}
