import * as VueRouter from 'vue-router'
import LayoutAuthed from '@/components/Layout/LayoutAuthed.vue'
import LayoutBlank from '@/components/Layout/LayoutBlank.vue'

import type { RouteRecordRaw } from 'vue-router'

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    redirect: '/home',
    component: LayoutBlank,
    children: [
      {
        path: '/home',
        name: 'dashboard',
        meta: { requiresAuth: false },
        component: () => import('@/views/home/dash-board.vue'),
      },
      {
        path: '/signin',
        name: 'signin',
        meta: { requiresAuth: false },
        component: () => import('@/views/sign/sign-in.vue'),
      },
      {
        path: '/signup',
        name: 'signup',
        meta: { requiresAuth: false },
        component: () => import('@/views/sign/sign-up.vue'),
      },
      {
        path: '/docs',
        name: 'article colltions',
        meta: { requiresAuth: false },
        component: () => import('@/views/docs/doc-colls.vue'),
      },
      {
        path: '/legal',
        name: 'user legal',
        meta: { requiresAuth: false },
        component: () => import('@/views/docs/doc-legal.vue'),
      },
      {
        path: '/privacy',
        name: 'privacy protocol',
        meta: { requiresAuth: false },
        component: () => import('@/views/docs/doc-privacy.vue'),
      },
      {
        path: '/docs/:id',
        name: 'article detail',
        meta: { requiresAuth: false },
        component: () => import('@/views/docs/doc-detail.vue'),
      },
      {
        path: '/*',
        name: 'NotFound',
        meta: { requiresAuth: false },
        component: () => import('@/views/error/not-found.vue'),
      },
    ],
  },
  {
    path: '/user',
    redirect: '/user/ikons',
    meta: { requiresAuth: true },
    component: LayoutAuthed,
    children: [
      {
        path: '/user/ikons',
        name: 'user-ikons',
        meta: { requiresAuth: true },
        component: () => import('@/views/ikon/ikon-colls.vue'),
      },
      {
        path: 'ikon/:id',
        name: 'user-ikon-detail',
        meta: { requiresAuth: true },
        component: () => import('@/views/ikon/ikon-detail.vue'),
      },
      {
        path: 'illus',
        name: 'user-illustrations',
        meta: { requiresAuth: true },
        component: () => import('@/views/illu/illu-colls.vue'),
      },
      {
        path: 'illu/:id',
        name: 'user-illu-detsil',
        meta: { requiresAuth: true },
        component: () => import('@/views/illu/illu-detail.vue'),
      },
      {
        path: 'account',
        name: 'user-account',
        meta: { requiresAuth: true },
        component: () => import('@/views/account/user-account.vue'),
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
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    return {
      path: '/signin',
      query: { redirect: to.fullPath },
    }
  }
})
