<template>
  <div class="home">
    <el-container class="main-wrapper">
      <el-aside width="200px">
        <nav-menu />
      </el-aside>
      <el-container>
        <!-- Header  -->
        <el-header height="50px">
          <nav-header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavHeader from '@/components/nav-header/NavHeader.vue'
</script>

<style lang="less" scoped>
.home {
  height: 100%;

  .main-wrapper {
    height: 100%;
  }

  .el-aside {
    // background-color: #001529;
    background-color: #2f549c;
    color: #fff;

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
}
</style>
