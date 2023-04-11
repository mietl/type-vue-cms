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
    // 根据条件请求用户数据
    async postUserListAction(query: any) {
      const usersListResult = await postUserList(query)
      if (usersListResult.code == 0) {
        const { totalCount, list } = usersListResult.data
        this.userList = list
        this.totalCount = totalCount
      }
    },
    // 根据用户id删除用户
    async deleteUserByIdAction(id: number) {
      // 删除用户动作
      await this.deleteUserByIdAction(id)
      // 删除后请求一次数据
      this.postUserListAction({})
    }
  }
})
