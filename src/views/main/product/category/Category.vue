<template>
  <div class="page-wrapper">
    <div class="header">
      <span>商品类别列表</span>
    </div>
    <el-divider />
    <div class="scaffold">
      <TTable pageName="product" :table-config="tableConfig"></TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import TTable from '@/components/page-table/TTable.vue'

import tableConfig from './config/table.config'
</script>

<style lang="less" scoped>
@import '@/assets/css/layout.less';
</style>
