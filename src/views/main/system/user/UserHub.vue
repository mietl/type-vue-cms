<template>
  <div class="user-wrapper">
    <div class="user-header">
      <span>用户管理</span>
    </div>
    <div class="search">
      <search-form @clearForm="resetData" @search-form="searchData"></search-form>
    </div>
    <el-divider />
    <div class="main-content">
      <user-table ref="userTableRef" style="height: 100%"></user-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SearchForm from './components/SearchForm.vue'
import UserTable from './components/UserTable.vue'

const userTableRef = ref<InstanceType<typeof UserTable>>()

const resetData = () => {
  userTableRef.value?.fetchUserList()
}

const searchData = (query: any) => {
  userTableRef.value?.fetchUserList(query)
}
</script>

<style scoped lang="less">
.user-wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px - 40px); /* 留出100像素的空间 */
  background: #fff;
  padding: 20px 20px 0px 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  // .user-header span {
  // border-radius: 20px;
  // padding: 8px 18px;
  // margin-bottom: 5px;
  // margin-right: 10px;
  // background: rgba(255, 118, 30, 0.15);
  // }

  .main-content {
    overflow: hidden;
    flex: 1;
  }

  .search {
    margin-top: 20px;
  }
}
</style>
