import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

import { localCache } from '@/utils/storage'

import { LOGIN_TOKEN } from '@/config/constant'

import { firstMenuItem, menuMapRoutes } from '@/utils/map_menu'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/HomePage.vue'),
    children: []
  },
  {
    path: '/:patchMatch(.*)',
    component: () => import('@/views/NotFoundPage.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

const token = localCache.get(LOGIN_TOKEN)
const userMenus = localCache.get('userMenus')

if (token && userMenus.length) {
  // 动态添加路由
  const children = menuMapRoutes(userMenus)
  children.forEach((route) => router.addRoute('main', route))
}

router.beforeEach((to) => {
  const token = localCache.get(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }

  if (to.path === '/main') {
    return firstMenuItem?.url
  }
})

export default router
