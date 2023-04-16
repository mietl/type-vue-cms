<template>
  <div class="nav-menu">
    <div class="header-bg">
      <div class="logo">
        <img class="img" src="@/assets/img/logo.png" alt="" />
        <div class="title" v-show="!isCollapse">内容管理</div>
      </div>
    </div>
    <!-- :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose" -->
    <!-- b7bdc3 -->
    <el-menu
      :collapse="isCollapse"
      :default-active="activeItem"
      background-color="#2f549c"
      text-color="#e1dfd9"
      active-text-color="#0a60bd"
      class="el-menu-vertical"
    >
      <template v-for="subMenuItem in userMenus" :key="subMenuItem.id">
        <el-sub-menu :index="String(subMenuItem.id)">
          <template #title>
            <el-icon>
              <component :is="subMenuItem.icon.split('icon')[1]"></component>
            </el-icon>
            <span>{{ subMenuItem.name }}</span>
          </template>

          <template v-for="menuItem in subMenuItem.children" :key="menuItem.id">
            <el-menu-item :index="String(menuItem.id)" @click="changePage(menuItem.url)">{{
              menuItem.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import useLoginStore from '@/store/login'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const loginStore = useLoginStore()

const userMenus = loginStore.userMenus

const route = useRoute()

const activeItem = computed(() => route.meta.id + '')

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const changePage = (path: string) => {
  router.push(path)
}
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
  background: url('@/assets/img/logobg.png');
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
  align-items: center;
  height: 50px;
  margin-left: -3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  // #c9c5c2
  .img {
    height: 60px;
    transform: scale(1.5);
    margin-right: 10px;
    margin-top: 5px;
  }

  .title {
    color: #e6f1ff;
    border-radius: 20px;
    padding: 10px 18px;
    font-size: 16px;
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    background-color: rgba(255, 118, 30, 0.15);
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
  color: #eae9e0;
  background: rgba(255, 255, 222, 0.4);
  // color: #303133;
  // color: #fff;
  // color: #333333;
  // background-color: #a4aec2 !important;
}
</style>
