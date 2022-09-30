import * as BaseAlertLocale from '@/components/BaseAlert/locale'
import * as BaseFeedBackLocale from '@/components/BaseFeedBack/locale'
import * as BaseModalLocale from '@/components/BaseModal/locale'
import * as LayoutAboutLocale from '@/components/Layout/locale/about.locale'
import * as LayoutFooterLocale from '@/components/Layout/locale/footer.locale'

import * as ViewUserLocale from '@/views/account/locale'
import * as ViewDocsLocale from '@/views/docs/locale'
import * as ViewErrorLocale from '@/views/error/locale'
import * as ViewHomeLocale from '@/views/home/locale'
import * as ViewIlluLocale from '@/views/albums/locale'
import * as ViewSignLocale from '@/views/sign/locale'

import * as MenusLocale from './menu.locale'

export const messages = {
  en: {
    // components
    ...BaseAlertLocale.en,
    ...BaseFeedBackLocale.en,
    ...BaseModalLocale.en,
    ...LayoutAboutLocale.en,
    ...LayoutFooterLocale.en,

    // views
    ...ViewUserLocale.en,
    ...ViewDocsLocale.en,
    ...ViewErrorLocale.en,
    ...ViewHomeLocale.en,

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

    // views
    ...ViewUserLocale.zh,
    ...ViewDocsLocale.zh,
    ...ViewErrorLocale.zh,
    ...ViewHomeLocale.zh,

    ...ViewIlluLocale.zh,
    ...ViewSignLocale.zh,

    // others
    ...MenusLocale.zh,
  },
}
