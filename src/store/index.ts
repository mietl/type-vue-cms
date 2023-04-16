import { createPinia } from 'pinia'
import type { App } from 'vue'

import { swalPlugin } from '../setup/alert'
import useLoginStore from './login'

const pinia = createPinia()

pinia.use(swalPlugin)

function usePinia(app: App) {
  app.use(pinia)

  const loginStore = useLoginStore()
  loginStore.entryPageAction()
}

export default usePinia
