<template>
  <div class="page-wrapper">
    <div class="main-content">
      <TTable pageName="menu" :table-config="tableConfig" style="height: 100%"> </TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import tableConfig from './config/table.config'
</script>

<style lang="less" scoped>
@import '@/assets/css/layout.less';
</style>
