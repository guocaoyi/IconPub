export class AlbumFormVo {}

export class AlbumVo {}

import { AccountVo } from './AccountVo'

export class GroupVo {}

/**
 * 项目VO
 */
export class ProjectVo {
  id: number
  name: string
  description: string
  logo: string

  /** 项目拥有编号 */
  ownerID: string
  /** 管理员 */
  authorInfo: AccountVo[]
  /** 所有者 */
  ownerInfo: AccountVo
  /** 参与者 */
  readerInfo: AccountVo[]
  /** 项目下辖图标数 */
  resourceCount: number

  /** 分组 */
  tags: string[]
  subgroupInfo: GroupVo[]
  extraInfo: { tags: string[]; subgroupInfo: GroupVo[] }
  type: 1

  createdAt: string
  updatedAt: string
}
