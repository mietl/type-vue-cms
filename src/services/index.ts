import { BASE_URL,TIME_OUT } from "@/config/env";

import httpRequest from "./request";

export default new httpRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT,
  interceptors:{
    requestInterceptor(config){
      // let token = '';
      // if(token){
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      console.log('实例请求拦截成功');
      return config;
    }
  }
})