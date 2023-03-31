<template>
  <div class="profile">
    <div class="toolbar">
      <span>
        <span class="dot"></span>
        <el-icon><Message /></el-icon>
      </span>
      <span>
        <el-icon><Promotion /></el-icon>
      </span>
      <span>
        <el-icon><Male /></el-icon>
      </span>
    </div>
    <el-dropdown>
      <span class="info">
        <el-avatar src="https://avatars.githubusercontent.com/u/69007221?v=4" />
        <div class="name">young</div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">
            <ant-design-logout-outlined class="info-icon" />
            退出登录
          </el-dropdown-item>
          <el-dropdown-item divided>
            <ant-design-info-circle-twotone class="info-icon" />
            个人信息
          </el-dropdown-item>
          <el-dropdown-item>
            <ant-design-unlock-outlined class="info-icon" />
            修改密码
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

const logout = () => {
  localCache.remove(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  align-items: center;
}
.toolbar {
  display: inline-flex;
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

.toolbar {
  display: flex;
  align-items: center;
}

.info {
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: 0;

  :global(.info-icon) {
    font-size: 16px;
    margin-right: 5px;
  }

  .name {
    margin-left: 5px;
    font-size: 16px;
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    padding: 6px 22px;
  }
}
</style>
