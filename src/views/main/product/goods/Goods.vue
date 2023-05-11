<template>
  <div class="page-wrapper">
    <div class="header">
      <span>商品列表</span>
    </div>
    <div class="search">
      <TSearch
        :pageName="pageName"
        :search-config="searchConfig"
        @clearForm="resetData"
        @searchForm="searchData"
      ></TSearch>
    </div>
    <el-divider />
    <div class="scaffold">
      <TTable
        ref="tableRef"
        :pageName="pageName"
        :table-config="tableConfig"
        :modal-config="modelConfig"
      >
        <template #imageSlot="{ row }">
          <el-image
            style="width: 50px; height: 50px"
            :src="row.imgUrl"
            :preview-src-list="[row.imgUrl]"
          >
          </el-image>
        </template>
      </TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import TTable from '@/components/page-table/TTable.vue'

import tableConfig from './config/table.config'
import searchConfig from './config/search.config'
import modelConfig from './config/model.config'

import { useSearch } from '@/hooks'

const pageName = 'product'

const { tableRef, searchData, resetData } = useSearch()
</script>

<style lang="less" scoped>
@import '@/assets/css/layout.less';
</style>
