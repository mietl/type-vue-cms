<template>
  <div class="page-wrapper">
    <div class="header">
      <span>角色管理</span>
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
      <TTable
        pageName="role"
        ref="tableRef"
        :table-config="tableConfig"
        :modal-config="modalConfig"
        style="height: 100%"
      ></TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '@/hooks/'
import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import modalConfig from './config/modal.config'

const { resetData, searchData } = useSearch()
</script>

<style scoped>
@import '@/assets/css/layout.less';
</style>
