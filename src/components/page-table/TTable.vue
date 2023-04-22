<template>
  <div class="utable">
    <div class="flex justify-between">
      <span>{{ tableConfig.title ?? '数据列表' }}</span>
      <el-button text bg round style="border: 1px solid #424242" @click="handleNewItem">
        <ant-design-user-add-outlined />
        {{ tableConfig.newItemText ?? '新建数据' }}
      </el-button>
    </div>
    <el-table :data="pageList" style="width: 100%">
      <template v-for="column in tableConfig.columnProps" :key="column.prop">
        <el-table-column v-if="column.type === 'custom'" v-bind="column">
          <template #default="scope">
            <slot :name="column.slotName" v-bind="scope" :prop="column.prop"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else-if="column.type === 'timeAt'" v-bind="column">
          <template #default="{ row }">
            {{ formatUTC(row[column.prop]) }}
          </template>
        </el-table-column>
        <el-table-column v-else-if="column.type === 'handler'" v-bind="column">
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
        <el-table-column v-else v-bind="column" />
      </template>
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

import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/store/system'

import TTModal from '@/components/page-modal/TTMoal.vue'

import { formatUTC } from '@/utils/format_date'

const systemStore = useSystemStore()
interface ITTableProps {
  tableConfig: {
    title: string
    newItemText: string
    columnProps: any[]
  }
}
const props = defineProps<ITTableProps>()

const formModalRef = ref<InstanceType<typeof TTModal>>()
// 新增数据
const handleNewItem = () => {
  formModalRef.value?.showDialogVisible()
  console.log(formModalRef.value)
}
// 编辑数据
const handleEditItem = (row: any) => {
  formModalRef.value?.showDialogVisible(true, row)
}

// 删除数据
const handleDeleteItem = (id: number) => {
  systemStore.deleteItemAction('department', id)
}

// 查询数据
const currentPage = ref(1)
const pageSize = ref(10)
const fetchPageList = (query?: any) => {
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

const handleSizeChange = () => {
  fetchPageList()
}

const handleCurrentChange = () => {
  fetchPageList()
}

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
