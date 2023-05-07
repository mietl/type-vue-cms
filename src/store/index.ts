import { createPinia } from 'pinia'
import type { App } from 'vue'

import useLoginStore from './login'

const pinia = createPinia()

function usePinia(app: App) {
  app.use(pinia)

  const loginStore = useLoginStore()
  loginStore.entryPageAction()
}

export default usePinia
