import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStorage, useCached } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

/**
 *
 * @returns
 */
export const useArticle = (articleId: string, local: string) => {
  const article = ref('')
  const { locale } = useI18n()

  return { article }
}
