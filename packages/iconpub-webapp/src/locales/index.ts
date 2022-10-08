import * as BaseAlertLocale from '@/components/BaseAlert/locale'
import * as BaseModalLocale from '@/components/BaseModal/locale'
import * as LayoutAboutLocale from '@/components/Layout/locale/about.locale'
import * as LayoutFooterLocale from '@/components/Layout/locale/footer.locale'

import * as ViewAccountLocale from '@/views/account/locale'
import * as ViewAlbumsLocale from '@/views/albums/locale'
import * as ViewDocsLocale from '@/views/docs/locale'
import * as ViewErrorLocale from '@/views/error/locale'
import * as ViewHomeLocale from '@/views/home/locale'
import * as ViewSignLocale from '@/views/sign/locale'

import * as MenusLocale from './menu.locale'

export const messages = {
  en: {
    // components
    ...BaseAlertLocale.en,

    ...BaseModalLocale.en,
    ...LayoutAboutLocale.en,
    ...LayoutFooterLocale.en,

    // views
    ...ViewAccountLocale.en,
    ...ViewAlbumsLocale.en,
    ...ViewDocsLocale.en,
    ...ViewErrorLocale.en,
    ...ViewHomeLocale.en,

    ...ViewSignLocale.en,

    // others
    ...MenusLocale.en,
  },
  zh: {
    // components
    ...BaseAlertLocale.zh,

    ...BaseModalLocale.zh,
    ...LayoutAboutLocale.zh,
    ...LayoutFooterLocale.zh,

    // views
    ...ViewAccountLocale.zh,
    ...ViewDocsLocale.zh,
    ...ViewAlbumsLocale.zh,
    ...ViewErrorLocale.zh,
    ...ViewHomeLocale.zh,

    ...ViewSignLocale.zh,

    // others
    ...MenusLocale.zh,
  },
}
