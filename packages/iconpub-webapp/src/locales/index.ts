import * as CollectionsLocales from '@/components/ip-banner/locales'
import * as LayoutsLocales from '@/components/layouts/locales'
import * as HomeLocale from '@/pages/home.locale'

export const messages = {
  en: {
    // components
    ...CollectionsLocales.en,
    ...LayoutsLocales.en,

    // pages
    ...HomeLocale.en,
  },
  zh: {
    // components
    ...CollectionsLocales.zh,
    ...LayoutsLocales.zh,

    // pages
    ...HomeLocale.zh,
  },
}
