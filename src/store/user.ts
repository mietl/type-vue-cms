import { defineStore } from 'pinia';

import { userLogin,getUserInfo,getUserRoleMenus } from '@/services/user';
import type { IAccount } from '@/types';

import router from '@/router';

import { LOGIN_TOKEN  } from '@/config/constant';
import { localCache } from '@/utils/storage';

import  { menuMapRoutes } from '@/utils/map_menu';

const useUserStore = defineStore('user',{
  state(){
    return {
      token: localCache.get(LOGIN_TOKEN)??'',
      userInfo:localCache.get('userInfo')??{},
      userMenus:localCache.get('userMenus')??[]
    }
  },
  actions:{
    async loginAction(account:IAccount){
      try {
        const result = await userLogin(account);
        
        if(result.status == 400){
          this.$swalToast.fire({
            text: result.data,
            icon: 'error'
          });
          return;
        }
        const userId =result.data.id;
        const token = result.data.token;

        this.token = token;

        // 本地存储token
        localCache.set(LOGIN_TOKEN,token)

        const userResult = await getUserInfo(userId);
        const userInfo = userResult.data;

        const roleId = userInfo.role.id;
        const menusResult = await getUserRoleMenus(roleId)
        const userMenus = menusResult.data;


        localCache.set('userInfo',userInfo);
        localCache.set('userMenus',userMenus);
        this.userMenus = userMenus;
        this.userInfo = userInfo;

      
        const children = menuMapRoutes(userMenus);

        // 添加路由
        children.forEach(route=> router.addRoute('main',route))

        // 跳转首页
        router.push('/main');
      } catch (error) {
        console.log(error);
      }
    }
  }
})

export default useUserStore;