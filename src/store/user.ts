import { defineStore } from 'pinia';

import { userLogin } from '@/services/user';
import type { IAccount } from '@/types';

import router from '@/router';

import { LOGIN_TOKEN  } from '@/config/constant';
import { localCache } from '@/utils/storage';

const useUserStore = defineStore('user',{
  state(){
    return {
      id:'',
      token: localCache.get(LOGIN_TOKEN)??'',
      name:''
    }
  },
  actions:{
    async loginAction(account:IAccount){
      const result = await userLogin(account);

      this.id = result.data.id;
      this.name = result.data.name;
      this.token = result.data.token;


      // 本地混存token
      localCache.set(LOGIN_TOKEN,this.token)

      // 跳转首页
      router.push('./main');
    }
  }
})

export default useUserStore;