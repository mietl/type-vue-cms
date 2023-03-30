import { createRouter,createWebHashHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

import { localCache } from '@/utils/storage';

import { LOGIN_TOKEN } from '@/config/constant';

const routes:RouteRecordRaw[]= [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/login', 
    component:()=>import('@/views/login/Login.vue')
  },
  {
    path:'/home',
    component:()=>import('@/views/home/HomePage.vue')
  },
  {
    path:'/:patchMatch(.*)',
    component:()=>import('@/views/NotFoundPage.vue')
  }
];

const router = createRouter({
  routes,
  history:createWebHashHistory()
})

router.beforeEach((to,from)=>{
  const token = localCache.get(LOGIN_TOKEN)
  if(to.path == '/home' && !token){
    return '/login';
  }
})

export default router;