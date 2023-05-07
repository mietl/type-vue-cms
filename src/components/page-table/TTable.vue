<template>
  <div class="utable">
    <div class="flex justify-between">
      <span>{{ tableConfig.title ?? '数据列表' }}</span>
      <el-button
        class="new-item-btn"
        text
        style="border: 1px solid #424242"
        @click="handleNewItem"
        v-if="isCreate"
      >
        <ant-design-user-add-outlined />
        {{ tableConfig.newItemText ?? '新建数据' }}
      </el-button>
    </div>
    <el-table
      :data="isQuery ? pageList : []"
      style="width: 100%"
      :rowKey="tableConfig.childrenProps?.rowKey"
    >
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
            <el-button
              v-if="isUpdate"
              link
              type="primary"
              size="small"
              @click="handleEditItem(row)"
            >
              <el-icon size="16">
                <ant-design-edit />
              </el-icon>
              修改
            </el-button>
            <el-popconfirm
              v-if="isDelete"
              width="140"
              confirm-button-text="删除"
              cancel-button-text="取消"
              confirm-button-type="danger"
              icon-color="#FC5E47"
              title="确认删除?"
              @confirm="handleDeleteItem(row.id)"
            >
              <template #reference>
                <el-button link type="danger" size="small">
                  <el-icon size="16">
                    <ant-design-delete-outlined />
                  </el-icon>
                  删除
                </el-button>
              </template>
            </el-popconfirm>
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
    <TTModal v-if="modalConfig" ref="formModalRef" :pageName="pageName" :modal-config="modalConfig">
      <template v-for="slot in modalSlots" #[slot.slotName]>
        <slot :name="slot.slotName"></slot>
      </template>
    </TTModal>
  </div>
</template>

<script setup lang="ts">
import TTModal from '@/components/page-modal/TTMoal.vue'

import { ref } from 'vue'

import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/store/system'

import type { ItableConfig, IModalConfig } from '@/types/table'
import usePermissions from '@/hooks/usePermissions'
import { formatUTC } from '@/utils/format_date'

const systemStore = useSystemStore()

export interface ITTableProps {
  pageName: string
  tableConfig: ItableConfig
  modalConfig?: IModalConfig
}

const props = defineProps<ITTableProps>()
const emit = defineEmits(['beforeEdit', 'beforeNew'])

const isCreate = usePermissions(`${props.pageName}:create`)
const isDelete = usePermissions(`${props.pageName}:delete`)
const isUpdate = usePermissions(`${props.pageName}:update`)
const isQuery = usePermissions(`${props.pageName}:query`)

// 新建弹窗插槽
const modalSlots = props.modalConfig?.formItems.filter(
  (item) => item.type == 'custom' && item.slotName
)

const formModalRef = ref<InstanceType<typeof TTModal>>()
// 新增数据
const handleNewItem = () => {
  emit('beforeNew')
  formModalRef.value?.showDialogVisible()
}
// 编辑数据
const handleEditItem = (row: any) => {
  emit('beforeEdit', row)
  formModalRef.value?.showDialogVisible(true, row)
}

// 删除数据
const handleDeleteItem = (id: number) => {
  systemStore.deleteItemAction(props.pageName, id)
}

// 查询数据
const currentPage = ref(1)
const pageSize = ref(10)

// 创建修改删除后，页码显示第一页
systemStore.$onAction(({ name, after }) => {
  after(() => {
    // 等待action执行完成后执行，返回状态是reslove
    let updatePageNumActions = ['deleteItemAction', 'createItemAction', 'updateItemAction']
    if (updatePageNumActions.includes(name)) {
      currentPage.value = 1
    }
  })
})
const fetchPageList = (query?: any) => {
  if (!isQuery) {
    return
  }
  const offset = (currentPage.value - 1) * pageSize.value
  const size = pageSize.value

  const pageInfo = {
    offset,
    size
  }
  systemStore.postListAction(props.pageName, { ...query, ...pageInfo })
}
// 默认请求一次
fetchPageList()
const handleSizeChange = fetchPageList

const handleCurrentChange = fetchPageList

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
.new-item-btn {
  padding: 9px 15px;
  font-size: 13px;
  border-radius: 5px;
}

.utable :deep(.el-table__cell) {
  padding: 12px 0;
}
</style>
