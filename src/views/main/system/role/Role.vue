<template>
  <div class="page-wrapper">
    <div class="header">
      <span>角色管理</span>
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
        :pageName="pageName"
        ref="tableRef"
        @before-edit="beforeEditHandler"
        @before-new="beforeNewHandler"
        :table-config="tableConfig"
        :modal-config="modalConfig"
        style="height: 100%"
      >
        <template #menulist>
          <!-- :model-value="checkTagKeys" -->
          <el-tree-select
            v-model="checkTagKeys"
            ref="treeRef"
            @check="checkMenuTree"
            style="width: 100%"
            tag-type="danger"
            :data="entireMenus"
            node-key="id"
            :props="{
              label: 'name'
            }"
            multiple
            show-checkbox
          >
          </el-tree-select>
        </template>
      </TTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref, nextTick } from 'vue'
import { storeToRefs } from 'pinia'

import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import modalConfig from './config/modal.config'

import { useSearch } from '@/hooks/'
import { menuMapKeys } from '@/utils/map_menu'

import usePageStore from '@/store/page'

const pageName = 'role'

const { entireMenus } = storeToRefs(usePageStore())

interface IPayloadData {
  menuList: number[]
}

const payloadData = reactive<IPayloadData>({
  menuList: []
})

let checkMenuKeys = []
// 输入框显示的菜单标签
const checkTagKeys = ref()

const mapMenuChildren = (menulist: any[]): number[] => {
  let keys: number[] = []
  menulist.map((item: any) => {
    if (item.children) {
      for (const submenu of item.children) {
        keys.push(submenu.id)
      }
    }
  })
  return keys
}
const mapMenuChildrenKeys = mapMenuChildren(entireMenus.value)

const checkMenuTree = (_: any, { checkedKeys, halfCheckedKeys }: any) => {
  checkMenuKeys = [...checkedKeys, ...halfCheckedKeys]

  payloadData.menuList = checkMenuKeys

  // 等待v-model 更新完，做一次过滤  只展示一级菜单与二级菜单标签
  nextTick(() => {
    checkTagKeys.value = mapMenuChildrenKeys.filter(
      (id: number) => treeRef.value?.getNode(id).checked
    )
  })
}

provide('payloadData', payloadData)

const treeRef = ref()

const beforeEditHandler = (row: any) => {
  let checkTreeKeys = menuMapKeys(row.menuList)

  let firstLevelCheckedKeys = mapMenuChildren(row.menuList)

  nextTick(() => {
    treeRef.value?.setCheckedKeys(checkTreeKeys)
    checkTagKeys.value = firstLevelCheckedKeys // getCheckedKeys()
  })
}

const beforeNewHandler = () => {
  nextTick(() => {
    checkTagKeys.value = []
    treeRef.value?.setCheckedKeys([])
  })
}

const { tableRef, resetData, searchData } = useSearch()
</script>

<style lang="less" scoped>
@import '@/assets/css/layout.less';
</style>
