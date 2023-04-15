import { getEntireDepartments, getEntireRoles } from '@/services/system'
import { defineStore } from 'pinia'

interface IPageState {
  entireRoles: any[]
  entireDepartments: any[]
}

const usePageStore = defineStore('page', {
  state(): IPageState {
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

export default usePageStore
