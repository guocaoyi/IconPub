import LayoutBlank from './components/LayoutBlank'

export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: LayoutBlank,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/projects',
        name: 'project collection',
        component: () => import('@/views/project/index.vue'),
      },
      {
        path: '/project/:id',
        name: 'project detail',
        component: () => import('@/views/project/project-detail.vue'),
      },
      {
        path: '/illus',
        name: 'illustrations',
        component: () => import('@/views/illu/index.vue'),
      },
      {
        path: '/illu/:id',
        name: 'illustration details',
        component: () => import('@/views/illu/illu-detail.vue'),
      },
      {
        path: '/account',
        name: 'account setting',
        component: () => import('@/views/account/index.vue'),
      },
    ],
  },
  // unauth
  {
    path: '/*',
    name: 'NotFound',
    component: LayoutBlank,
    children: [
      // docs & articles
      {
        path: '/docs',
        name: 'articles',
        component: () => import('@/views/docs/index.vue'),
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
        name: 'articles',
        component: () => import('@/views/docs/index.vue'),
      },

      // feedback
      {
        path: '/feedback',
        name: 'feedback',
        component: () => import('@/views/feedback/index.vue'),
      },
      {
        path: '/*',
        name: 'NotFound',
        component: () => import('@/views/error/not-found.vue'),
      },
    ],
  },
]
