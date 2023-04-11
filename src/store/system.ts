import { postUserList } from '@/services/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './types/system'

export const useSystemStore = defineStore('system', {
  state(): ISystemState {
    return {
      userList: [],
      totalCount: 0
    }
  },
  actions: {
    async postUserListAction(pageInfo: any) {
      const usersListResult = await postUserList(pageInfo)
      if (usersListResult.code == 0) {
        const { totalCount, list } = usersListResult.data
        this.userList = list
        this.totalCount = totalCount
      }
    }
  }
})
