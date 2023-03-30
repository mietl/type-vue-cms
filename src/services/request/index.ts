import axios from 'axios';

import type { AxiosInstance,InternalAxiosRequestConfig,AxiosResponse,AxiosRequestConfig} from 'axios'

import { ElLoading } from 'element-plus'



// InternalAxiosRequestConfig 是一个 TypeScript 接口，用于扩展 Axios 的 AxiosRequestConfig 接口，以添加自定义配置。您可以使用它来定义您需要的额外配置参数。
interface IRequestInterConfig extends AxiosRequestConfig{
  interceptors?:IRequestInterceptors,
  showLoading?:boolean,
}


interface IRequestInterceptors {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorRejected?: (error: any) => any;
  responseInterceptor?: <T = AxiosResponse> (res:T) => T
  responseInterceptorRejected?: (error: any) => any;
}


const SETUP_LOADING = true;

class httpRequest {
  instance:AxiosInstance
  showLoading?:boolean
  loading?:any

  // 添加全局拦截器
  setupInterceptors(){
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

  constructor(config:IRequestInterConfig){
    this.instance = axios.create(config)

    this.showLoading = config.showLoading || SETUP_LOADING;

    this.setupInterceptors();

    // 实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorRejected
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorRejected
    )
  }

  request<T = any>(config:IRequestInterConfig):Promise<T>{
    return new Promise((resolve,reject)=>{
       // 某单个请求添加拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config as InternalAxiosRequestConfig)
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
        this.showLoading = SETUP_LOADING;
      })

    })
  }

  get<T = any>(url: string, config?: IRequestInterConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET', url });
  }

  post<T = any>(url: string, config?: IRequestInterConfig):Promise<T>{
    return this.request<T>({ ...config,method:'POST',url});
  }


  delete<T = any>(url: string, config?: IRequestInterConfig):Promise<T>{
    return this.request({...config,method:'DELETE',url});
  }

  patch<T = any>(url: string, config?: IRequestInterConfig):Promise<T>{
    return this.request({...config,method:'PATCH',url});
  }
  
}

export default httpRequest;