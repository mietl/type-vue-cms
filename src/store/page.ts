import { getEntireDepartments, getEntireRoles, getEntireMenus } from '@/service/entry/page'
import { defineStore } from 'pinia'

interface IPageState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

const usePageStore = defineStore('page', {
  state(): IPageState {
    return {
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  actions: {
    getSetAction() {
      getEntireRoles().then((res) => (this.entireRoles = res.data.list))
      getEntireDepartments().then((res) => (this.entireDepartments = res.data.list))
      getEntireMenus().then((res) => (this.entireMenus = res.data.list))
    }
  }
})

export default usePageStore
