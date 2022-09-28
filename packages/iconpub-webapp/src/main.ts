import * as Vue from 'vue'
import * as VueI18n from 'vue-i18n'
import * as VueRouter from 'vue-router'

import App from '@/App.vue'
import request from '@/utils/request'
import { messages } from '@/locales'
import { routes } from '@/router'

import 'normalize.css/normalize.css'
import 'uno.css'

// i18n & locales
const i18n = VueI18n.createI18n({
  locale: localStorage.getItem('__ICON_PUB_LOCALE') ?? 'zh', // en
  fallbackLocale: 'zh',
  allowComposition: true,
  messages,
})

// router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

// app instance
const app = Vue.createApp(App)

// error check
app.config.warnHandler = (msg, instance, trace) => {
  console.warn(msg, trace)
}
app.config.errorHandler = (err, instance, info) => {
  console.warn(err, info)
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
