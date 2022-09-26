import * as BaseBannerLocale from '@/components/BaseBanner/locale'
import * as LayoutFooterLocale from '@/components/LayoutFooter/locale'
import * as LayoutHeaderLocale from '@/components/LayoutHeader/locale'

import * as HomeLocale from '@/views/home/locale'

export const messages = {
  en: {
    // components
    ...BaseBannerLocale.en,
    ...LayoutFooterLocale.en,
    ...LayoutHeaderLocale.en,

    // views
    ...HomeLocale.en,
  },
  zh: {
    // components
    ...BaseBannerLocale.zh,
    ...LayoutFooterLocale.zh,
    ...LayoutHeaderLocale.zh,

    // views
    ...HomeLocale.zh,
  },
}
