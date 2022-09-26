export class AlbumFormPo {}

import { AccountPo } from './AccountPo'

export class GroupPo {}

/**
 * album PO
 */
export class AlbumPo {
  id: number
  name: string
  description: string
  logo: string

  ownerID: string

  authorInfo: AccountPo[]

  /** 所有者 */
  ownerInfo: AccountPo
  /** 参与者 */
  readerInfo: AccountPo[]
  /** 项目下辖图标数 */
  resourceCount: number

  /** 分组 */
  tags: string[]
  subgroupInfo: GroupPo[]
  extraInfo: { tags: string[]; subgroupInfo: GroupPo[] }
  type: 1

  createdAt: string

  updatedAt: string
}