<template>
  <div class="utable">
    <div class="flex justify-between">
      <span>部门列表</span>
      <el-button text bg round style="border: 1px solid #424242" @click="handleNewItem">
        <ant-design-user-add-outlined />
        新建部门
      </el-button>
    </div>
    <el-table :data="pageList" style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="部门名称" width="120" />
      <el-table-column prop="leader" label="部门领导" width="120" />
      <el-table-column prop="parentId" label="上级部门" width="120" />
      <el-table-column prop="createAt" label="创建时间">
        <template #default="{ row }">
          {{ formatUTC(row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column prop="updateAt" label="最近修改">
        <template #default="{ row }">
          {{ formatUTC(row.updateAt) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="handleEditItem(row)">
            <el-icon size="16">
              <ant-design-edit />
            </el-icon>
            修改
          </el-button>
          <el-button link type="danger" size="small" @click="handleDeleteItem(row.id)">
            <el-icon size="16">
              <ant-design-delete-outlined />
            </el-icon>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-block flex justify-end">
      <el-pagination
        class="mt"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[20, 50, 100, 200]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <TTModal ref="formModalRef"></TTModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TTModal from '@/components/page-modal/TTModal.vue'

import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/store/system'

import { formatUTC } from '@/utils/format_date'

const systemStore = useSystemStore()

const currentPage = ref(1)
const pageSize = ref(10)

const handleSizeChange = () => {
  fetchPageList()
}

const handleCurrentChange = () => {
  fetchPageList()
}

const formModalRef = ref<InstanceType<typeof TTModal>>()
const handleNewItem = () => {
  formModalRef.value?.showDialogVisible()
}

const handleEditItem = (row: any) => {
  formModalRef.value?.showDialogVisible(true, row)
}

// 删除用户
const handleDeleteItem = (id: number) => {
  systemStore.deleteItemAction('department', id)
}

// 请求用户数据
function fetchPageList(query?: any) {
  const offset = (currentPage.value - 1) * pageSize.value
  const size = pageSize.value

  const pageInfo = {
    offset,
    size
  }
  systemStore.postListAction('department', { ...query, ...pageInfo })
}

// 默认请求一次
fetchPageList()
// 用户列表，数据总数
const { pageList, pageTotalCount } = storeToRefs(systemStore)

defineExpose({
  fetchPageList
})
</script>

<style scoped lang="less">
.el-table {
  height: calc(100% - 32px - 56px);
}
.utable :deep(.el-table__cell) {
  padding: 12px 0;
}
</style>
