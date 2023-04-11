<template>
  <div class="user-container">
    <div class="user-header">
      <span>用户管理</span>
    </div>
    <div class="search">
      <search-form></search-form>
    </div>
    <div class="main-content">
      <user-table></user-table>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import SearchForm from './components/SearchForm.vue'
import UserTable from './components/UserTable.vue'


</script>

<style scoped lang="less">
.user-container {
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  .user-header span {
    // border-radius: 20px;
    // padding: 8px 18px;
    // margin-bottom: 5px;
    // margin-right: 10px;
    // background: rgba(255, 118, 30, 0.15);
  }

  .search {
    margin-top: 20px;
  }
}
</style>
