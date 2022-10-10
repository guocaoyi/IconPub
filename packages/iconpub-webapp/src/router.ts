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
    path: menus.home.path,
    component: LayoutBasic,
    children: [
      {
        path: menus.home.path,
        meta: { requiresAuth: false, ...menus.home },
        component: () => import('@/views/home/home-index.vue'),
      },
      {
        path: menus.pub.path,
        meta: { requiresAuth: false, ...menus.pub },
        component: () => import('@/views/home/home-pub.vue'),
      },
      {
        path: menus.album.path,
        meta: { requiresAuth: true, ...menus.album },
        component: () => import('@/views/albums/albums-index.vue'),
      },
      {
        path: menus.albums.path,
        meta: { requiresAuth: true, ...menus.albums },
        component: () => import('@/views/albums/album-detail.vue'),
      },
      {
        path: menus.blogs.path,
        meta: { requiresAuth: false, ...menus.blogs },
        component: () => import('@/views/blog/blog-posts.vue'),
      },
      {
        path: menus.blog.path,
        meta: { requiresAuth: false, ...menus.blog },
        component: () => import('@/views/blog/blog-article.vue'),
      },
      {
        path: menus.signin.path,
        meta: { requiresAuth: false, ...menus.signin },
        component: () => import('@/views/sign/sign-in.vue'),
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
