<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.png" alt="" />
      <h2 class="title">内容管理</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  // padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;

  // #c9c5c2
  .img {
    // height: 126px;
    height: 60px;
    transform: scale(1.5);
    margin-right: 10px;
  }

  .title {
    font-size: 22px;
    font-weight: normal;
    color: #424242;
  }
}
</style>
