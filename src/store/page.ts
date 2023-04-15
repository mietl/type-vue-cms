import { getEntireDepartments, getEntireRoles } from '@/services/system'
import { defineStore } from 'pinia'

interface IPageCache {
  entireRoles: any[]
  entireDepartments: any[]
}

const usePageCacheStore = defineStore('page', {
  state(): IPageCache {
    return {
      entireRoles: [],
      entireDepartments: []
    }
  },
  actions: {
    getSetAction() {
      getEntireRoles().then((res) => (this.entireRoles = res.data.list))
      getEntireDepartments().then((res) => (this.entireDepartments = res.data.list))
    }
  }
})

export default usePageCacheStore
