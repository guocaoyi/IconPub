import 'vue-router'
import * as VueRouter from 'vue-router'
import LayoutBasic from '@/components/Layout/LayoutBasic.vue'
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
    component: LayoutBasic,
    children: [
      {
        path: menus.home.path,
        meta: { requiresAuth: false, ...menus.home },
        component: () => import('@/views/home/home-index.vue'),
      },
      {
        path: menus.space.path,
        meta: { requiresAuth: false, ...menus.space },
        component: () => import('@/views/home/home-space.vue'),
      },
      {
        path: menus.album.path,
        meta: { requiresAuth: false, ...menus.album },
        component: () => import('@/views/albums/albums-index.vue'),
      },
      {
        path: menus.signin.path,
        meta: { requiresAuth: false, ...menus.signin },
        component: () => import('@/views/sign/sign-in.vue'),
      },
      {
        path: menus.docs.path,
        meta: { requiresAuth: false, ...menus.docs },
        component: () => import('@/views/docs/docs-index.vue'),
      },
      {
        path: menus.doc.path,
        meta: { requiresAuth: false, ...menus.doc },
        component: () => import('@/views/docs/doc-detail.vue'),
      },
      {
        path: menus.account.path,
        meta: { requiresAuth: true, ...menus.account },
        component: () => import('@/views/account/account-index.vue'),
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
      path: menus.signin.path,
      query: { redirect: to.fullPath },
    }
  }
})
