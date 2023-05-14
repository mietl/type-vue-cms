import { createApp } from 'vue'
import App from './App.vue'

import setup from '@/setup/'

import 'normalize.css'
import './assets/css/main.less'
import 'element-plus/theme-chalk/display.css'

import router from './router'
import pinia from './store'

createApp(App)
  // unplugin不支持动态图标，暂时用全局
  .use(setup)
  .use(pinia)
  .use(router)
  .mount('#app')
