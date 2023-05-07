<template>
  <div class="home">
    <el-container class="main-wrapper">
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <nav-menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <!-- Header  -->
        <el-header height="50px">
          <nav-header @changeCollapse="setCollapse" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavHeader from '@/components/nav-header/NavHeader.vue'

const isCollapse = ref(false)
const setCollapse = (flag: boolean) => {
  isCollapse.value = flag
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;

  .main-wrapper {
    height: 100%;
  }

  .el-aside {
    background-color: #2f549c;
    color: #fff;
    text-align: left;
    cursor: pointer;

    transition: width 0.3s ease;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .el-main {
    background: #f0f2f5;
    --el-main-padding: 15px;
  }
}
</style>
