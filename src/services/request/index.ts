import axios, { Axios } from 'axios';

import type { AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios'

import { ElLoading } from 'element-plus'

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?:IRequestInterceptors,
  showLoading?:boolean
}


interface IRequestInterceptors {
  requestInterceptor?: <T = InternalAxiosRequestConfig>(config: T) => T
  requestInterceptorRejected?: (error: any) => any;
  responseInterceptor?: <T = AxiosResponse> (res:T) => T
  responseInterceptorRejected?: (error: any) => any;
}


const defaultLoading = true;

class httpRequest {
  instance:AxiosInstance
  interceptors?:IRequestInterceptors
  showLoading?:boolean
  loading?:any

  // 添加全局拦截器
  useStaticInterceptors(){
    // 添加全局请求拦截
    this.instance.interceptors.request.use(
      config=>{
        if(this.showLoading){
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
            // spinner: 'custom-loading-spinner',
            background: 'rgba(255, 255, 255, 0.7)',
          })
        }

        console.log('全局请求成功拦截')
        return config;
      },

      err=>{
        console.log('全局请求失败拦截')
        return err;
      }
    )

    // 添加全局响应拦截
    this.instance.interceptors.response.use(
      res=>{
        console.log('全局响应成功拦截')
        setTimeout(()=>{
          this.loading?.close();
        },1000)
        return res.data;
      },

      err=>{
        console.log('全局响应失败拦截')
        this.loading?.close();
        if (err.response.status === 404) {
          // 处理错误
        }
        return err;
      }
    )
  }


  useInstanceInterceptors(){
  }

  constructor(config:InternalAxiosRequestConfig){
    this.instance = axios.create(config)

    this.interceptors = config.interceptors
    this.showLoading = config.showLoading || defaultLoading;

    this.useStaticInterceptors();

    this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorRejected
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorRejected
    )

  }

  request<T>(config:InternalAxiosRequestConfig):Promise<T>{
    return new Promise((resolve,reject)=>{
       // 某单个请求添加拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否需要显示loading
      if(config.showLoading == false){
        this.showLoading = false;
      }

      this.instance.request<any,T>(config)
      .then(res=>{
        if (config.interceptors?.responseInterceptor) {
          // 将返回数据交给你处理
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res);
      })
      .catch(reject)
      .finally(()=>{
        // 请求完成后，恢复全局是否显示loading状态
        this.showLoading = defaultLoading;
      })

    })
  }

  get<T>(config:InternalAxiosRequestConfig):Promise<T>{
    return this.request({...config,method:'GET'});
  }

  post<T>(config:InternalAxiosRequestConfig):Promise<T>{
    return this.request({ ...config,method:'POST'});
  }


  delete<T>(config:InternalAxiosRequestConfig):Promise<T>{
    return this.request({...config,method:'DELETE'});
  }

  patch<T>(config:InternalAxiosRequestConfig):Promise<T>{
    return this.request({...config,method:'PATCH'});
  }
  
}

export default httpRequest;