import { defineStore } from 'pinia';

import { userLogin,getUserInfo,getUserRoleMenus } from '@/services/user';
import type { IAccount } from '@/types';

import router from '@/router';

import { LOGIN_TOKEN  } from '@/config/constant';
import { localCache } from '@/utils/storage';

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
      const result = await userLogin(account);

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

      // 跳转首页
      router.push('/home');
    }
  }
})

export default useUserStore;