import * as collections from '../components/collections/locales'
import * as layouts from '../components/layouts/locales'

export const messages = {
  en: {
    // components
    ...collections.en,
    ...layouts.en,

    // pages
    message: {
      morning: 'coming soon...',
      slogen: 'Personal or Enterprise users, please set your own bucket or private deployment',
    },
  },
  zh: {
    // components
    ...collections.zh,
    ...layouts.zh,

    // pages
    message: {
      morning: '即将上线！',
      slogen: '个人或者企业用户请设置『独立存储桶』或者『私有化部署』',
    },
  },
}
