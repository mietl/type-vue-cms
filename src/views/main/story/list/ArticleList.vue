<template>
  <div class="page-wrapper">
    <div class="header">
      <span>故事列表</span>
    </div>
    <el-divider />
    <div class="scaffold">
      <TTable pageName="story" :table-config="tableConfig">
        <template #content="{ row, prop }">
          <div v-html="row[prop]"></div>
        </template>
      </TTable>
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
