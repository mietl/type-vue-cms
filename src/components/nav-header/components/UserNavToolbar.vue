<template>
  <div class="profile">
    <div class="toolbar">
      <span>
        <span class="dot"></span>
        <ep-notification></ep-notification>
      </span>
      <span>
        <ant-design:github-filled></ant-design:github-filled>
      </span>
      <span>
        <img :src="ticon" width="24" />
      </span>
      <!-- <span style="font-size: 23px"> &#x1F36C; </span> -->
    </div>
    <el-dropdown>
      <div class="info flex items-center">
        <el-avatar
          class="mr"
          :size="32"
          src="https://avatars.githubusercontent.com/u/69007221?v=4g"
        />
        <span class="text-large font-600 mr"> young </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <ant-design-info-circle-twotone class="info-icon" />
            个人信息
          </el-dropdown-item>
          <el-dropdown-item>
            <ep-lock class="info-icon"></ep-lock>
            修改密码
          </el-dropdown-item>
          <el-dropdown-item @click="logout" divided>
            <ant-design-logout-outlined class="info-icon" />
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/config/constant'
import router from '@/router'
import { localCache } from '@/utils/storage'

import ticon from '@/assets/img/t.png'

const logout = () => {
  localCache.remove(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  align-items: center;
  font-family: 'SanFrancisco', sans-serif;
}
.toolbar {
  display: flex;
  align-items: center;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.info {
  cursor: pointer;
  outline: 0;

  :global(.info-icon) {
    font-size: 14px;
    margin-right: 5px;
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    padding: 6px 14px;
  }
}
</style>
