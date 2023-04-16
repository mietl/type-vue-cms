import { postUserList, deleteUserById, createUser, updateUserById } from '@/services/system'
import { defineStore } from 'pinia'

import { handleSuccess } from '@/utils/message'
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
    async deleteUserAction(id: number) {
      // 删除用户动作
      await deleteUserById(id)
      // 删除后请求最新数据
      this.postUserListAction({})
      handleSuccess('用户删除成功')
    },
    async createUserAction(userInfo: any) {
      await createUser(userInfo)
      this.postUserListAction({})
      handleSuccess('创建用户成功')
    },
    async updateUserAction(id: number, userInfo: any) {
      // 删除用户动作
      await updateUserById(id, userInfo)
      // 删除后请求最新数据
      this.postUserListAction({})
      handleSuccess('修改成功')
    }
  }
})
