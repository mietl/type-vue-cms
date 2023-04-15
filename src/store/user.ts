import { defineStore } from 'pinia'

import { userLogin, getUserInfo, getUserRoleMenus } from '@/services/user'
import type { IAccount } from '@/types'

import router from '@/router'

import { LOGIN_TOKEN } from '@/config/constant'
import { localCache } from '@/utils/storage'

import { menuMapRoutes } from '@/utils/map_menu'
import usePageStore from './page'

import { handleError } from '@/utils/error_handling'

const useLoginStore = defineStore('user', {
  state() {
    return {
      token: localCache.get(LOGIN_TOKEN) ?? '',
      userInfo: localCache.get('userInfo') ?? {},
      userMenus: localCache.get('userMenus') ?? []
    }
  },
  actions: {
    async loginAction(account: IAccount) {
      try {
        // 登录
        const loginResult = await userLogin(account)

        if (loginResult.status == 400) {
          handleError(loginResult.data)
          return
        }

        const { id: userId, token } = loginResult.data

        // 存储 token
        this.token = token
        localCache.set(LOGIN_TOKEN, token)

        // 获取用户信息
        const userInfo = await getUserInfo(userId)
        this.storeUserInfo(userInfo.data)

        // 获取用户菜单
        const roleId = userInfo.data.role.id
        const userMenus = await getUserRoleMenus(roleId)
        this.storeUserMenus(userMenus.data)

        // 动态添加路由
        this.addMatchedRoutes()

        // 跳转首页前，开始加载可能被使用的数据
        usePageStore().getSetAction()

        // 跳转首页
        router.push('/main')
      } catch (error) {
        console.log(error)
      }
    },
    storeUserInfo(userInfo: any) {
      localCache.set('userInfo', userInfo)
      this.userInfo = userInfo
    },
    storeUserMenus(userMenus: any) {
      localCache.set('userMenus', userMenus)
      this.userMenus = userMenus
    },
    entryPageAction() {
      if (this.token && this.userMenus) {
        this.addMatchedRoutes()
        usePageStore().getSetAction()
      }
    },
    addMatchedRoutes() {
      // 动态添加路由
      const children = menuMapRoutes(this.userMenus)
      children.forEach((route) => router.addRoute('main', route))
    }
  }
})

export default useLoginStore
