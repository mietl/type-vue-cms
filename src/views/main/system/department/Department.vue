<template>
  <div class="page-wrapper">
    <div class="header">
      <span>部门管理</span>
    </div>
    <div class="search">
      <TSearch
        :search-config="searchConfig"
        @clearForm="resetData"
        @searchForm="searchData"
      ></TSearch>
    </div>

    <el-divider />
    <div class="main-content">
      <TTable
        pageName="department"
        ref="tableRef"
        :table-config="tableConfig"
        :modal-config="modalConfig"
        style="height: 100%"
      >
        <template #parentId="{ row, prop }: SlotProps">
          <span>{{ getDepartmentById(row[prop]) }}</span>
        </template>
      </TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSearch } from '@/hooks/'

import TSearch from '@/components/page-search/TSearch.vue'
import TTable from '@/components/page-table/TTable.vue'

import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import modalConfig from './config/modal.config'

import usePageStore from '@/store/page'

interface SlotProps {
  [key: string]: any
}

const { entireDepartments } = storeToRefs(usePageStore())
const getDepartmentById = (id: string | number) => {
  let dep = entireDepartments.value.find((item) => item.id == id)
  if (dep) {
    return dep.name
  }
  return ''
}

modalConfig.formItems.forEach((item) => {
  if (item.prop === 'parentId') {
    const options = entireDepartments.value.map((item) => ({ label: item.name, value: item.id }))
    item.options = options
  }
})

const { tableRef, resetData, searchData } = useSearch()
</script>

<style scoped lang="less">
@import '@/assets/css/layout.less';
</style>
