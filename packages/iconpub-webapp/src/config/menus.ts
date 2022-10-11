export interface Menu {
  /** route name */ name: string
  /** route path, menu */ path: string
  /** local for route name */ locale?: string
}

/**
 * menus
 */
export const menus = {
  home: { name: 'home', path: '/', locale: 'menu.home' },
  pub: { name: 'pub', path: '/pub', locale: 'menu.pub' },
  albums: { name: 'albums', path: '/albums', locale: 'menu.album' },
  album: { name: 'album-detail', path: '/album/:id', locale: 'menu.album' },

  terms: { name: 'blog-terms', path: '/blog/terms', locale: 'menu.terms' },
  privacy: { name: 'blog-privacy', path: '/blog/privacy', locale: 'menu.privacy' },
  blogs: { name: 'blogs', path: '/blog/posts', locale: 'menu.blog' },
  blog: { name: 'blog-detail', path: '/blog/:id', locale: 'menu.blog' },

  signin: { name: 'signin', path: '/signin', locale: 'menu.signin' },
  account: { name: 'account', path: '/account', locale: 'menu.account' },
}
