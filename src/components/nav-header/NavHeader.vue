<template>
  <div class="nav-header">
    <el-icon size="25px" class="collapse-icon"><Expand /></el-icon>
    <div class="header-bar">
      <div class="breadcrumbs">面包屑</div>
      <div class="profile">
        用户信息
        <el-button @click="logout">dropout</el-button>
      </div>
    </div>
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
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;

  .collapse-icon {
    display: flex;
    align-items: center;
  }

  .header-bar {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
