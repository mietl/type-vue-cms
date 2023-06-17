import { deletePageItem, createPageItem, updatePageItem } from '@/service/system'

import { postPageList } from '@/service/system'
import { defineStore } from 'pinia'

import { handleSuccess, handleError } from '@/utils/message'
import type { ISystemState } from './types/system'
import usePageStore from './page'

export const useSystemStore = defineStore('system', {
  state(): ISystemState {
    return {
      pageList: [],
      pageTotalCount: 0
    }
  },
  actions: {
    // 请求页面的数据
    async postListAction(pageName: string, query: any) {
      const pageListResult = await postPageList(pageName, query)
      if (pageListResult.code == 0) {
        const { totalCount, list } = pageListResult.data

        console.log(pageListResult);
        this.pageList = list
        this.pageTotalCount = totalCount || list.length;
      }
    },
    async deleteItemAction(pageName: string, id: number) {
      try {
        // 删除用户动作
        await deletePageItem(pageName, id)
        // 删除后请求最新数据
        this.postListAction(pageName, {})
        handleSuccess('删除成功')
        usePageStore().getSetAction()
      } catch (error) {
        handleError('删除失败')
      }
    },
    async createItemAction(pageName: string, itemData: any) {
      try {
        await createPageItem(pageName, itemData)
        this.postListAction(pageName, {})
        handleSuccess('创建成功')
        usePageStore().getSetAction()
      } catch (error) {
        handleError('创建失败')
      }
    },
    async updateItemAction(pageName: string, id: number, itemData: any) {
      try {
        // 删除用户动作
        await updatePageItem(pageName, id, itemData)
        // 删除后请求最新数据
        this.postListAction(pageName, {})
        handleSuccess('修改成功')
        usePageStore().getSetAction()
      } catch (error) {
        handleError('修改失败')
      }
    }
  }
})
