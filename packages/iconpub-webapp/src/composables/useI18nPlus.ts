import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export const useI18nPlus = () => {
  const i18n = useI18n()

  const alias = ref('EN')

  const locales = ref([
    { local: 'en', label: 'English', lang: 'English' },
    { local: 'zh', label: '简体中文', lang: 'Simplified Chinese' },
    { local: 'zh_t', label: '繁體中文', lang: 'Traditional Chinese' },
    { local: 'jp', label: '日本語', lang: 'Japanese' },
    { local: 'ko', label: '한국어', lang: 'Korean' },
  ])

  const toggleLocale = () => {
    const locale = i18n.locale.value
    i18n.locale.value = locale == 'zh' ? 'en' : 'zh'
  }

  watch(i18n.locale, () => {
    if (i18n.locale.value === 'en') {
      alias.value = 'EN'
    } else if (i18n.locale.value === 'zh') {
      alias.value = '中'
    } else if (i18n.locale.value === 'jp') {
      alias.value = '日本語'
    } else if (i18n.locale.value === 'ko') {
      alias.value = '한국어'
    }
  })

  return {
    i18n,
    alias,
    locales,
    toggleLocale,
  }
}
