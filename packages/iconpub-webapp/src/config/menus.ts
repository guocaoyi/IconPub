export interface Menu {
  /** route name */ name: string
  /** route path, menu */ path: string
  /** local for route name */ locale?: string
}

/**
 * menus
 */
export const menus = {
  root: { name: 'root', path: '/' },
  home: { name: 'home', path: '/home', locale: 'menu.home' },
  space: { name: 'space', path: '/space', locale: 'menu.space' },
  signin: { name: 'signin', path: '/signin', locale: 'menu.signin' },

  // docs
  docs: { name: 'docs', path: '/docs', locale: 'menu.doc' },
  doc: { name: 'doc-detail', path: '/doc/:id', locale: 'menu.doc' },
  terms: { name: 'doc-terms', path: '/doc/terms', locale: 'menu.terms' },
  privacy: { name: 'doc-privacy', path: '/doc/privacy', locale: 'menu.privacy' },

  // account
  account: { name: 'account', path: '/account', locale: 'menu.account' },
  albums: { name: 'albums', path: '/albums', locale: 'menu.album' },
  album: { name: 'album-detail', path: '/album/:id', locale: 'menu.album' },
}
