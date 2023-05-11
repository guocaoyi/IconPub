import { User } from '../../auth/model/user.schema'

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

export class Album {
  id: number

  name: string

  description: string

  type: 'icon' | 'illu' | 'lottie' | 'svg'

  orgId: string

  /**
   * public: for all platform user can visit
   * private: just for owner
   * protected: for owner and contributors and org members
   */

  visibility: 'public' | 'private' | 'protected'

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
