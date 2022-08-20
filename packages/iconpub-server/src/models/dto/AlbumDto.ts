import { AccountDto } from './AccountDto'

class Group {
  id: number
  name: string
}

/**
 * @scope iconfont
 */
export class FontProjectDto {
  id: number
  description: string
  create_user_id: '4844256'

  font_family: 'iconpub'
  font_format: 'woff2,woff,ttf,eot'
  font_is_old: 0
  guid: null
  name: '测试图标项目'
  prefix: 'qm-icon-'
  status: null

  created_at: string
  updated_at: string
  deleted_at?: string
}

/**
 * @scope iconpark
 */
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
  created_at: string
  updated_at?: string
  deleted_at?: string
}

/**
 * 图标集合（项目、等同 Project）
 */
export class CollectionDto {
  id: 39973
  name: string
  description: string

  copyright: null
  cover_icon_id: null
  create_user_id: 9986357

  fees: null
  has_secret: 0
  has_temp: 0
  icons: []

  /** count */
  all_count: number
  /** 点赞数 */
  favorite_count: number
  /** 图标统计 */
  icons_count: number
  /** 点赞数 */
  likes_count: number
  /** 访问数 */
  visits_count: number

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
  type: 'icon'
  url: ''

  createdAt: string
  created_at: string
  updatedAt: string
  updated_at: string
}
