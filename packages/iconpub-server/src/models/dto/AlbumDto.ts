import { AccountDto } from './AccountDto'

class Group {
  id: number
  name: string
}

export class FontProjectDto {
  id: number
  description: string
  create_user_id: string

  font_family: 'iconpub'
  font_format: 'woff2,woff,ttf,eot'
  font_is_old: 0
  guid: null
  name: string
  prefix: 'icon-'
  status: null

  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export class ProjectDto {
  id: number
  name: string
  description: string
  logo: string
  authorInfo: []
  ownerID: string
  ownerInfo: AccountDto
  /** */
  readerInfo: AccountDto[]
  /** 项目下辖图标数 */
  resourceCount: number
  /** 分组 */
  tags: string[]
  subgroupInfo: Group[]
  extraInfo: { tags: string[]; subgroupInfo: Group[] }
  type: 1
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

/**
 * 图标集合（项目、等同 Project）
 */
export class CollectionDto {
  id: number
  name: string
  description: string

  copyright: null
  cover_icon_id: null
  create_user_id: number

  fees: null
  has_secret: number
  has_temp: number
  icons: []

  /** count */
  allCount: number
  /** 点赞数 */
  favoriteCount: number
  /** 图标统计 */
  iconsCount: number
  /** 点赞数 */
  likesCount: number
  /** 访问数 */
  visitsCount: number

  is_colorful: 1
  is_official: 0
  license: null
  opensource_url: null
  recommend: 0
  show: 1
  show_source_file: null
  slug: string
  source_file_type: null
  tag_ids: '6,20'
  type: 'icon' | 'ikon' | ''
  url: ''

  createdAt: string
  updatedAt: string
}
