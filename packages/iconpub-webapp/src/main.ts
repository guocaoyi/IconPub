import * as Vue from 'vue'
import * as VueI18n from 'vue-i18n'

import App from '@/App.vue'
import request from '@/utils/request'
import { messages } from '@/locales'
import { router } from '@/router'

import 'normalize.css/normalize.css'
import 'uno.css'

// i18n & locales
const i18n = VueI18n.createI18n({
  legacy: false,
  locale: localStorage.getItem('__ICON_PUB_LOCALE') ?? 'en', // en
  globalInjection: true,
  fallbackLocale: 'en',
  allowComposition: true,
  messages,
})

// app instance
const app = Vue.createApp(App)

// error check
app.config.warnHandler = (msg, instance, trace) => {
  console.warn(msg, trace)
}
app.config.errorHandler = (err, instance, info) => {
  console.error(err, info)
}

app
  .use(i18n)
  .use(router)
  .use(request, { timeout: 10 * 10000 })
  .mount('#app')

if (process.env.NODE_ENV === 'development') {
  globalThis.__VUE_OPTIONS_API__ = true
  globalThis.__VUE_PROD_DEVTOOLS__ = true
} else {
  globalThis.__VUE_OPTIONS_API__ = false
  globalThis.__VUE_PROD_DEVTOOLS__ = false
}
