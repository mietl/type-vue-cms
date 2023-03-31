<template>
  <div class="nav-menu">
    <div class="header-bg">
      <div class="logo">
        <img class="img" src="@/assets/img/logo.png" alt="" />
        <h2 class="title" v-show="!isCollapse">内容管理</h2>
      </div>
    </div>

    <!-- :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose" -->
    <!-- b7bdc3 -->
    <el-menu
      :collapse="isCollapse"
      default-active="2"
      background-color="#2f549c"
      text-color="#e1dfd9"
      active-text-color="#0a60bd"
      class="el-menu-vertical"
    >
      <template v-for="subMenuItem in userMenus" :key="subMenuItem.id">
        <el-sub-menu :index="String(subMenuItem.id)">
          <template #title>
            <!-- <icon :name="'ep' + subMenuItem.icon.split('icon')[1]" /> -->
            <el-icon>
              <component :is="'ep' + subMenuItem.icon.split('icon')[1]"></component>
            </el-icon>
            <!-- <span class="iconify" data-icon="ep:home"></span> -->
            <span>{{ subMenuItem.name }}</span>
          </template>

          <template v-for="menuItem in subMenuItem.children" :key="menuItem.id">
            <el-menu-item :index="String(menuItem.id)">{{ menuItem.name }}</el-menu-item>
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

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  // background-color: #FBA93D;
  // background: linear-gradient(to bottom, #fff, #2f549c);
  .el-menu {
    border-right: none;
  }
}

.header-bg {
  background: url('@/assets/img/icon_1024x1024x32.png');
  background-position: -65px -250px;
  background-size: 500px;
  animation: swing 1.5s linear infinite alternate;
}

@keyframes swing {
  0% {
    background-position: -65px -250px;
  }

  100% {
    background-position: -65px -300px;
  }
}
.logo {
  display: flex;
  align-items: start;
  height: 50px;
  margin-left: -3px;
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
    color: #fff !important;
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
  color: #303133 !important;
  // color: #fff;
  // color: #333333;
  background-color: #a4aec2 !important;
}
</style>
