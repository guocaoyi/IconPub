import { User } from 'src/model/user.schema'

export class ResourceUri {
  js: string
  js_svg: string
  css: string
  eot: string
  ttf: string
  woff: string
  woff2: string
}

/**
 * album
 */

export class AlbumDto {
  name: string

  description: string

  type: 'icon' | 'illu' | 'lottie' | 'svg'

  /**
   * private: just for owner
   * protected: for owner and contributors
   * public: for all platform user can visit
   */
  visibility: 'private' | 'protected' | 'public'

  status: 'active' | 'archived' | 'deleted'

  /**
   * owner can visit\add\delete items(icon), achieve\delete album
   */

  owner: User

  /**
   * contributor can read and write and delete items(icon)
   */

  contributors: User[]

  resourceCount: number

  resourceSvgUri: string

  resourceCompUri: string

  tags: string[]

  icons: string[]

  pined: boolean

  createdAt: string

  updatedAt: string

  deletedAt?: string
}

export class AlbumForm {}
