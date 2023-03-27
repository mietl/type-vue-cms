import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

import './assets/css/main.less'



import router from './router';
import pinia from './store';

createApp(App)
.use(router)
.use(pinia)
// .use(ElementPlus)
.mount('#app')
