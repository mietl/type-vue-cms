import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

import './assets/css/main.less'


import httpRequest from './services/index';


interface DataType {
  data:any,
  returnCode:string
  success:string
}

httpRequest.request<DataType>({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'GET'
})
.then(res=>{
  console.log('res',res.data);
})

// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

import router from './router';
import pinia from './store';

createApp(App)
.use(router)
.use(pinia)
// .use(ElementPlus)
.mount('#app')
