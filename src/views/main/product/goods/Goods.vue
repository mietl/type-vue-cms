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
          <div class="image-wrapper">
              <el-image
              :src="row.imgUrl"
              :zoom-rate="1.2"
              :preview-src-list="[row.imgUrl]"
              fit="contain"
              :preview-teleported="true"
            />
          </div>
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

const pageName = 'goods'

const { tableRef, searchData, resetData } = useSearch()
</script>

<style lang="less" scoped>
@import '@/assets/css/layout.less';
</style>
