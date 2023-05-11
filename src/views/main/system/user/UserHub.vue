<template>
  <div class="user-wrapper">
    <div class="user-header">
      <span>用户管理</span>
    </div>
    <div class="search">
      <TSearch
        :searchConfig="searchConfig"
        @clearForm="resetData"
        @searchForm="searchData"
        pageName="users"
      ></TSearch>
    </div>
    <el-divider />
    <div class="scaffold">
      <TTable
        @before-edit="beforeEditItem"
        :modal-config="modalConfig"
        :table-config="tableConfig"
        pageName="users"
        ref="tableRef"
        style="height: 100%"
      >
        <template #enable="{ row }">
          <el-tag effect="plain" :type="row.enable ? '' : 'danger'" hit round>{{
            row.enable ? '启用' : '禁用'
          }}</el-tag>
        </template>
      </TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import TSearch from '@/components/page-search/TSearch.vue'
import TTable from '@/components/page-table/TTable.vue'

import { storeToRefs } from 'pinia'
import usePageStore from '@/store/page'

import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import modalConfig from './config/modal.config'

import { findFormItemByProp } from '@/utils/form_config'

import { useSearch } from '@/hooks/'

const { entireDepartments, entireRoles } = storeToRefs(usePageStore())

const stateMapOption = (list: any) => {
  return list.map((item: any) => ({ label: item.name, value: item.id }))
}

modalConfig.formItems.forEach((item) => {
  if (item.prop === 'departmentId') {
    item.options = stateMapOption(entireDepartments.value)
  }
  if (item.prop === 'roleId') {
    item.options = stateMapOption(entireRoles.value)
  }
})

let passwordItem = findFormItemByProp(modalConfig.formItems, 'password')
const beforeEditItem = () => {
  if (passwordItem) {
    passwordItem.hidden = true
  }
}

const { tableRef, resetData, searchData } = useSearch()
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

  .scaffold {
    overflow: hidden;
    flex: 1;
  }

  .search {
    margin-top: 20px;
  }
}
</style>
