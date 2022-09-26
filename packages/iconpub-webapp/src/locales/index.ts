import * as BaseModalLocale from '@/components/BaseModal/locale'
import * as LayoutFooterLocale from '@/components/LayoutFooter/locale'
import * as LayoutHeaderLocale from '@/components/LayoutHeader/locale'

import * as HomeLocale from '@/views/home/locale'

export const messages = {
  en: {
    // components
    ...BaseModalLocale.en,
    ...LayoutFooterLocale.en,
    ...LayoutHeaderLocale.en,

    // views
    ...HomeLocale.en,
  },
  zh: {
    // components
    ...BaseModalLocale.zh,
    ...LayoutFooterLocale.zh,
    ...LayoutHeaderLocale.zh,

    // views
    ...HomeLocale.zh,
  },
}
