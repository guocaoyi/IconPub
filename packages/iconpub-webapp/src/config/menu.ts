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
  sign: { name: 'sign-in', path: '/signin', locale: 'menu.sign' },

  docs: { name: 'doc-colls', path: '/docs', locale: 'menu.docs' },
  doc: { name: 'doc-detail', path: '/doc/:id', locale: 'menu.doc' },
  terms: { name: 'doc-terms', path: '/doc/terms', locale: 'menu.terms' },
  privacy: { name: 'doc-privacy', path: '/doc/privacy', locale: 'menu.privacy' },

  icons: { name: 'icon-colls', path: '/icons', locale: 'menu.icons' },
  icon: { name: 'icon-detail', path: '/icon/:id', locale: 'menu.icon' },

  illus: { name: 'illu-colls', path: '/illus', locale: 'menu.illus' },
  illu: { name: 'illu-detail', path: '/illu/:id', locale: 'menu.illu' },

  account: { name: 'user-account', path: '/account', locale: 'menu.account' },
  feedback: { name: 'feedback', path: '/feedback', locale: 'menu.feedback' },
}
