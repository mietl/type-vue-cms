<template>
  <div class="page-wrapper">
    <div class="header">
      <span>角色管理</span>
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
        pageName="role"
        ref="tableRef"
        @before-edit="beforeEditHandle"
        @before-new="beforeNewHandle"
        :table-config="tableConfig"
        :modal-config="modalConfig"
        style="height: 100%"
      >
        <template #menulist>
          <el-tree-select
            ref="treeRef"
            v-model="checkedTags"
            @check="checkMenuTree"
            style="width: 100%"
            :data="entireMenus"
            node-key="id"
            :props="{
              label: 'name'
            }"
            multiple
            show-checkbox
          />
        </template>
      </TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import modalConfig from './config/modal.config'

import { useSearch } from '@/hooks/'

import usePageStore from '@/store/page'

import { provide, reactive, ref, nextTick } from 'vue'

import { storeToRefs } from 'pinia'

import { menuMapKeys } from '@/utils/map_menu'

// 输入框显示的菜单标签
const checkedTags = ref()

export interface IPayloadData {
  menuList: number[]
}

const payloadData = reactive<IPayloadData>({
  menuList: []
})
let checkMenuKeys = []
const checkMenuTree = (_: any, { checkedKeys, halfCheckedKeys }: any) => {
  checkMenuKeys = [...checkedKeys, ...halfCheckedKeys]
  payloadData.menuList = checkMenuKeys
}

provide('payloadData', payloadData)

const treeRef = ref()
const beforeEditHandle = (row: any) => {
  console.log(row)
  let checkTreeKeys = menuMapKeys(row.menuList)
  let firstTreeKeys = row.menuList.map((item: any) => item.id)

  nextTick(() => {
    treeRef.value?.setCheckedKeys(checkTreeKeys)
    checkedTags.value = firstTreeKeys
    // checkedTags.value = treeRef.value?.getCheckedKeys()
  })
}

const beforeNewHandle = () => {
  nextTick(() => {
    checkedTags.value = []
    treeRef.value?.setCheckedKeys([])
  })
}

const { tableRef, resetData, searchData } = useSearch()

const { entireMenus } = storeToRefs(usePageStore())
</script>

<style scoped>
@import '@/assets/css/layout.less';
</style>
