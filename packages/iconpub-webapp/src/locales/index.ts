import * as BaseModalLocale from '@/components/BaseModal/locale'
import * as LayoutFooterLocale from '@/components/LayoutFooter/locale'
import * as LayoutHeaderLocale from '@/components/LayoutHeader/locale'

import * as AccountLocale from '@/views/account/locale'
import * as DocsLocale from '@/views/docs/locale'
import * as ErrorLocale from '@/views/error/locale'
import * as FeedBackLocale from '@/views/feedback/locale'
import * as HomeLocale from '@/views/home/locale'
import * as IlluLocale from '@/views/illu/locale'
import * as ProjectLocale from '@/views/project/locale'

export const messages = {
  en: {
    // components
    ...BaseModalLocale.en,
    ...LayoutFooterLocale.en,
    ...LayoutHeaderLocale.en,

    // views
    ...AccountLocale.en,
    ...DocsLocale.en,
    ...ErrorLocale.en,
    ...FeedBackLocale.en,
    ...HomeLocale.en,
    ...IlluLocale.en,
    ...ProjectLocale.en,
  },
  zh: {
    // components
    ...BaseModalLocale.zh,
    ...LayoutFooterLocale.zh,
    ...LayoutHeaderLocale.zh,

    // views
    ...AccountLocale.zh,
    ...DocsLocale.zh,
    ...ErrorLocale.zh,
    ...FeedBackLocale.zh,
    ...HomeLocale.zh,
    ...IlluLocale.zh,
    ...ProjectLocale.zh,
  },
}
