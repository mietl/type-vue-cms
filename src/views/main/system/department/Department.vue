<template>
  <div class="page-wrapper">
    <div class="header">
      <span>部门管理</span>
    </div>
    <div class="search">
      <TSearch
        :search-config="searchConfig"
        @clearForm="resetData"
        @search-form="searchData"
      ></TSearch>
    </div>

    <el-divider />
    <div class="main-content">
      <TTable ref="tableRef" style="height: 100%"></TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TSearch from '@/components/page-search/TSearch.vue'
import TTable from '@/components/page-table/TTable.vue'

import searchConfig from './config/search.config'

const tableRef = ref<InstanceType<typeof TTable>>()

const resetData = () => {
  tableRef.value?.fetchPageList()
}

const searchData = (query: any) => {
  tableRef.value?.fetchPageList(query)
}
</script>

<style scoped lang="less">
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px - 40px); /* 留出100像素的空间 */
  background: #fff;
  padding: 20px 20px 0px 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  .main-content {
    overflow: hidden;
    flex: 1;
  }

  .search {
    margin-top: 20px;
  }
}
</style>
