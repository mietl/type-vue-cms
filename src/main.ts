import { createApp } from 'vue'
import App from './App.vue'

import elementPlusIcons from '@/setup/icons';

import 'normalize.css'
import './assets/css/main.less'


import router from './router';
import pinia from './store';

createApp(App)
// unplugin不支持动态，图标，暂时用全局
.use(elementPlusIcons)
.use(router)
.use(pinia)
.mount('#app')
