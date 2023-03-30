<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.png" alt="" />
      <h2 class="title">内容管理</h2>
    </div>
    <!-- :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose" -->

    <!-- b7bdc3 -->
    <el-menu
      default-active="2"
      background-color="#2f549c"
      text-color="#e1dfd9"
      active-text-color="#0a60bd"
      class="el-menu-vertical"
    >
      <template v-for="subMenuItem in userMenus" :key="subMenuItem.id">
        <el-sub-menu :index="subMenuItem.id">
          <template #title>
            <el-icon>
              <component :is="subMenuItem.icon.split('icon')[1]"></component>
            </el-icon>
            <span>{{ subMenuItem.name }}</span>
          </template>

          <template v-for="menuItem in subMenuItem.children" :key="menuItem.id">
            <el-menu-item :index="menuItem.id">{{ menuItem.name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/user'

const userStore = useUserStore()

const userMenus = userStore.userMenus
</script>

<style lang="less" scoped>
.nav-menu {
  background-color: #fff;
  // background: linear-gradient(to bottom, #fff, #2f549c);
  border-right: none;
}
.logo {
  display: flex;
  align-items: start;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  // #c9c5c2
  .img {
    height: 60px;
    transform: scale(1.5);
    margin-right: 10px;
    margin-top: -3px;
  }

  .title {
    font-size: 17px;
    font-weight: normal;
    color: #303133 !important;
  }
}

// 目录
.el-submenu {
  background-color: #001529 !important;
  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
}

:v-deep .el-submenu__title {
  background-color: #001529 !important;
}

// hover 高亮
.el-menu-item:hover:not(.is-active) {
  color: #fff !important; // 菜单
}

.el-menu-item.is-active {
  // color: #303133 !important;
  color: #333333;
  // c9c5c2
  background-color: #c9c5c2 !important;
}
</style>
