import * as Vue from 'vue'
import * as VueI18n from 'vue-i18n'
import * as VueRouter from 'vue-router'
import * as Pinia from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import { routes } from './router'
import { messages } from './locales'
import request from '@/utils/request'

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
app
  .use(ElementPlus)
  .use(i18n)
  .use(router)
  .use(stores)
  .use(request, { timeout: 10 * 10000 })
  .mount('#app')
