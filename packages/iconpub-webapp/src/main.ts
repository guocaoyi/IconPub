import * as Vue from 'vue'
import * as VueI18n from 'vue-i18n'
import * as VueRouter from 'vue-router'
import * as Pinia from 'pinia'
import ElementPlus from 'element-plus'
import Aegis from 'aegis-web-sdk'

import App from '@/App.vue'
import config from '@/config'
import request from '@/utils/request'
import { routes } from '@/router'
import { messages } from '@/locales'

import '@/styles/index.scss'
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/dist/index.css'

// i18n & locales
const i18n = VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

// router
const router = VueRouter.createRouter({
  history: VueRouter.createMemoryHistory(),
  routes,
})

// stores
const stores = Pinia.createPinia()

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
  .use(ElementPlus)
  .use(i18n)
  .use(router)
  .use(stores)
  .use(request, { timeout: 10 * 10000 })
  .mount('#app')

if (process.env.NODE_ENV === 'production') {
  const aegis = new Aegis({
    id: config.traceId, // 上报 id
    uin: '', // 用户唯一 ID（可选）
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    spa: true, // spa 应用页面跳转的时候开启 pv 计算
  })
}
