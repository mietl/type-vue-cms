import { createRouter,createWebHashHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

import { localCache } from '@/utils/storage';

import { LOGIN_TOKEN } from '@/config/constant';

const routes:RouteRecordRaw[]= [
  {
    path:'/',
    redirect:'/main'
  },
  {
    path:'/login', 
    component:()=>import('@/views/login/Login.vue')
  },
  {
    path:'/main',
    name:'main',
    component:()=>import('@/views/main/HomePage.vue'),
    children:[]
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

router.beforeEach((to)=>{
  const token = localCache.get(LOGIN_TOKEN)
  if(to.path.startsWith('/main') && !token){
    return '/login';
  }
})

export default router;