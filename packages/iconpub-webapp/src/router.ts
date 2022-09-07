import Home from '@/views/home/index.vue'
import Legal from '@/views/legal/index.vue'
import Privacy from '@/views/privacy/index.vue'

export const routes = [
  // home
  { path: '/', component: Home },

  // protocol
  { path: '/legal', component: Legal },
  { path: '/privacy', component: Privacy },
]
