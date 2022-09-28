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
        component: () => import('@/views/home/dash-board.vue'),
      },
      {
        path: '/signin',
        name: 'signin',
        component: () => import('@/views/sign/sign-in.vue'),
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/sign/sign-up.vue'),
      },
      {
        path: '/docs',
        name: 'article colltions',
        component: () => import('@/views/docs/doc-colls.vue'),
      },
      {
        path: '/legal',
        name: 'user legal',
        component: () => import('@/views/docs/doc-legal.vue'),
      },
      {
        path: '/privacy',
        name: 'privacy protocol',
        component: () => import('@/views/docs/doc-privacy.vue'),
      },
      {
        path: '/docs/:id',
        name: 'article detail',
        component: () => import('@/views/docs/doc-detail.vue'),
      },
      {
        path: '/*',
        name: 'NotFound',
        component: () => import('@/views/error/not-found.vue'),
      },
    ],
  },
  {
    path: '/user',
    redirect: '/user/ikons',
    component: LayoutAuthed,
    children: [
      {
        path: 'ikons',
        name: 'user-ikons',
        component: () => import('@/views/ikon/ikon-colls.vue'),
      },
      {
        path: 'ikon/:id',
        name: 'user-ikon-detail',
        component: () => import('@/views/ikon/ikon-detail.vue'),
      },
      {
        path: 'illus',
        name: 'user-illustrations',
        component: () => import('@/views/illu/illu-colls.vue'),
      },
      {
        path: 'illu/:id',
        name: 'user-illu-detsil',
        component: () => import('@/views/illu/illu-detail.vue'),
      },
      {
        path: 'account',
        name: 'user-account',
        component: () => import('@/views/account/user-account.vue'),
      },
    ],
  },
]
