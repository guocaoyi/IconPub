import { AccountDto } from './account.dto'

class Group {
  id: number
  name: string
}

export class FontProjectDto {
  id: number
  description: string
  createUserId: string

  font_family: 'iconpub'
  font_format: 'woff2,woff,ttf,eot'
  font_is_old: 0
  guid: null
  name: string

  prefix: `${string}-`

  status: null

  createdAt: string

  updatedAt: string

  deletedAt?: string
}

/**
 * 图标集合（项目、等同 Project）
 */
export class AlbumDto {
  id: string
  name: string
  description: string

  logo: string
  authorInfo: []
  ownerId: string
  ownerInfo: AccountDto
  readerInfo: AccountDto[]
  resourceCount: number
  subgroupInfo: Group[]
  extraInfo: { tags: string[]; subgroupInfo: Group[] }

  tags: string[]
  type: 'icon' | 'illu' | 'lottie' | 'svg' | '3d'

  copyright: null
  coverCconId: null
  createUserId: number

  fees: null
  has_secret: number
  has_temp: number
  icons: []

  /** count */
  allCount: number
  favoriteCount: number
  likesCount: number
  iconsCount: number
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

  url: ''

  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
