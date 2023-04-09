import ElementPlusIcons from './icons';
import Alert from './alert';



import type { App } from 'vue'
export default function (app:App){
  app.use(ElementPlusIcons);
  app.use(Alert);
}