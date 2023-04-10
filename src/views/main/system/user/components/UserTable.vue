<template>
  <div class="user-table">
    <span>用户列表</span>
    <el-table :data="userList" height="250" style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="用户名" width="120" />
      <el-table-column prop="realname" label="姓名" width="120" />
      <el-table-column prop="enable" label="状态" width="90" align="center">
        <template #default="{ row }">
          <el-tag effect="plain" hit round>{{ row.enable ? '启用' : '禁用' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="cellphone" label="电话号码" />
      <el-table-column prop="createAt" label="创建时间">
        <tempalte #default="{ row }">
          {{ formatUTC(row.createAt) }}
        </tempalte>
      </el-table-column>
      <el-table-column prop="updateAt" label="最近修改">
        <tempalte #default="{ row }">
          {{ formatUTC(row.updateAt) }}
        </tempalte>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <el-button link type="primary" size="small">
          <el-icon size="16">
            <ant-design-edit />
          </el-icon>
          修改
        </el-button>
        <el-button link type="danger" size="small">
          <el-icon size="16">
            <ant-design-delete-outlined />
          </el-icon>
          删除
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/store/system'

import { formatUTC } from '@/utils/format_date'

const systemStore = useSystemStore()

systemStore.postUserListAction()
const { userList, totalCount } = storeToRefs(systemStore)
</script>

<style scoped lang="less">
.user-table :deep(.el-table__cell) {
  padding: 12px 0;
}
</style>
