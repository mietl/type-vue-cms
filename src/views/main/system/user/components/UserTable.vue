<template>
  <div class="user-table">
    <div class="flex justify-between">
      <span>用户列表</span>
      <el-button text bg round style="border: 1px solid #424242" @click="newUserClick">
        <ant-design-user-add-outlined />
        新建用户
      </el-button>
    </div>
    <el-table :data="userList" height="250" style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="用户名" width="120" />
      <el-table-column prop="realname" label="姓名" width="120" />
      <el-table-column prop="enable" label="状态" width="90" align="center">
        <template #default="{ row }">
          <el-tag effect="plain" :type="row.enable ? '' : 'danger'" hit round>{{
            row.enable ? '启用' : '禁用'
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="cellphone" label="电话号码" />
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
          <el-button link type="primary" size="small">
            <el-icon size="16">
              <ant-design-edit />
            </el-icon>
            修改
          </el-button>
          <el-button link type="danger" size="small" @click="handleDeleteRow(row.id)">
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
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <UserAlertModal ref="userAlertModal"></UserAlertModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UserAlertModal from './UserAlertModal.vue'

import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/store/system'

import { formatUTC } from '@/utils/format_date'

const systemStore = useSystemStore()

const currentPage = ref(1)
const pageSize = ref(10)

const handleSizeChange = () => {
  fetchUserList()
}

const handleCurrentChange = () => {
  fetchUserList()
}

const userAlertModal = ref<InstanceType<typeof UserAlertModal>>()
const newUserClick = () => {
  userAlertModal.value?.changeDialogVisible(true)
}

// 监听数据删除
const handleDeleteRow = (id: number) => {
  systemStore.deleteUserByIdAction(id)
}

// 请求用户数据
function fetchUserList(query?: any) {
  const offset = (currentPage.value - 1) * pageSize.value
  const size = pageSize.value

  const pageInfo = {
    offset,
    size
  }
  systemStore.postUserListAction({ ...query, ...pageInfo })
}

// 默认请求一次
fetchUserList()
// 用户列表，数据总数
const { userList, totalCount } = storeToRefs(systemStore)

defineExpose({
  fetchUserList
})
</script>

<style scoped lang="less">
.user-table :deep(.el-table__cell) {
  padding: 12px 0;
}
</style>
