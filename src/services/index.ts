import { LOGIN_TOKEN } from "@/config/constant";
import { BASE_URL,TIME_OUT } from "@/config/env";
import { localCache } from "@/utils/storage";

import httpRequest from "./request";
export default new httpRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT,
  interceptors:{
    requestInterceptor(config){
      const token = localCache.get(LOGIN_TOKEN);
      if(config.headers && token){
        config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log('实例请求拦截成功');
      return config;
    },
    responseInterceptorRejected(err){
      return err.response;
    }
  }
})

