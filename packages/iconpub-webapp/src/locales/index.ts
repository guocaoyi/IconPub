import * as BaseAlertLocale from '@/components/BaseAlert/locale'
import * as BaseFeedBackLocale from '@/components/BaseFeedBack/locale'
import * as BaseModalLocale from '@/components/BaseModal/locale'
import * as LayoutAboutLocale from '@/components/Layout/locale/about.locale'
import * as LayoutFooterLocale from '@/components/Layout/locale/footer.locale'
import * as LayoutHeaderLocale from '@/components/Layout/locale/header.locale'

import * as ViewAccountLocale from '@/views/account/locale'
import * as ViewDocsLocale from '@/views/docs/locale'
import * as ViewErrorLocale from '@/views/error/locale'
import * as ViewFeedBackLocale from '@/views/feedback/locale'
import * as ViewHomeLocale from '@/views/home/locale'
import * as ViewIconLocale from '@/views/icon/locale'
import * as ViewIlluLocale from '@/views/illu/locale'
import * as ViewSignLocale from '@/views/sign/locale'

import * as MenusLocale from '@/config/menu.locale'

export const messages = {
  en: {
    // components
    ...BaseAlertLocale.en,
    ...BaseFeedBackLocale.en,
    ...BaseModalLocale.en,
    ...LayoutAboutLocale.en,
    ...LayoutFooterLocale.en,
    ...LayoutHeaderLocale.en,

    // views
    ...ViewAccountLocale.en,
    ...ViewDocsLocale.en,
    ...ViewErrorLocale.en,
    ...ViewFeedBackLocale.en,
    ...ViewHomeLocale.en,
    ...ViewIconLocale.en,
    ...ViewIlluLocale.en,
    ...ViewSignLocale.en,

    // others
    ...MenusLocale.en,
  },
  zh: {
    // components
    ...BaseAlertLocale.zh,
    ...BaseFeedBackLocale.zh,
    ...BaseModalLocale.zh,
    ...LayoutAboutLocale.zh,
    ...LayoutFooterLocale.zh,
    ...LayoutHeaderLocale.zh,

    // views
    ...ViewAccountLocale.zh,
    ...ViewDocsLocale.zh,
    ...ViewErrorLocale.zh,
    ...ViewFeedBackLocale.zh,
    ...ViewHomeLocale.zh,
    ...ViewIconLocale.zh,
    ...ViewIlluLocale.zh,
    ...ViewSignLocale.zh,

    // others
    ...MenusLocale.zh,
  },
}
