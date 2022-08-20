import { createApp } from 'vue'
import * as VueI18n from 'vue-i18n'
import ElementPlus from 'element-plus'

import App from './App.vue'
import { messages } from './locales'

import '~/styles/index.scss'
import 'uno.css'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/dist/index.css'

// import all element css, uncommented next line

// or use cdn, uncomment cdn link in `index.html`

const i18n = VueI18n.createI18n({
  locale: 'zh', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

const app = createApp(App)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
