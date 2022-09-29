import 'vue-router'
import * as VueRouter from 'vue-router'
import LayoutAuthed from '@/components/Layout/LayoutAuthed.vue'
import { menus } from '@/config'

import type { Menu } from '@/config'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta extends Menu {
    requiresAuth: boolean
  }
}

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: menus.root.path,
    redirect: menus.home.path,
    component: LayoutAuthed,
    children: [
      {
        path: menus.home.path,
        meta: { requiresAuth: false, ...menus.home },
        component: () => import('@/views/home/dash-board.vue'),
      },
      {
        path: menus.sign.path,
        meta: { requiresAuth: false, ...menus.sign },
        component: () => import('@/views/sign/sign-in.vue'),
      },
      {
        path: menus.docs.path,
        meta: { requiresAuth: false, ...menus.docs },
        component: () => import('@/views/docs/doc-colls.vue'),
      },
      {
        path: menus.doc.path,
        meta: { requiresAuth: false, ...menus.doc },
        component: () => import('@/views/docs/doc-detail.vue'),
      },

      {
        path: menus.icons.path,
        meta: { requiresAuth: true, ...menus.icons },
        component: () => import('@/views/icon/icon-colls.vue'),
      },
      {
        path: menus.icon.path,
        meta: { requiresAuth: true, ...menus.icon },
        component: () => import('@/views/icon/icon-detail.vue'),
      },
      {
        path: menus.illus.path,
        meta: { requiresAuth: true, ...menus.illus },
        component: () => import('@/views/illu/illu-colls.vue'),
      },
      {
        path: menus.illu.path,
        meta: { requiresAuth: true, ...menus.illu },
        component: () => import('@/views/illu/illu-detail.vue'),
      },
      {
        path: menus.feedback.path,
        meta: { requiresAuth: true, ...menus.feedback },
        component: () => import('@/views/account/user-account.vue'),
      },
      {
        path: menus.account.path,
        meta: { requiresAuth: true, ...menus.account },
        component: () => import('@/views/account/user-account.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        component: () => import('@/views/error/not-found.vue'),
      },
    ],
  },
]

// router
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

// route guards
router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    return {
      path: menus.sign.path,
      query: { redirect: to.fullPath },
    }
  }
})
