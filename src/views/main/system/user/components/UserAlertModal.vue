<template>
  <el-dialog v-model="dialogVisible" title="新建用户" width="33%" center>
    <el-form label-width="70">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="userFormModel.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="realname">
        <el-input v-model="userFormModel.realname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" v-if="!isEditState">
        <el-input show-password v-model="userFormModel.password"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="cellphone">
        <el-input v-model="userFormModel.cellphone"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="角色" prop="roleId">
            <el-select label="选择角色" v-model="userFormModel.roleId">
              <template v-for="role in entireRoles" :key="role.id">
                <el-option :value="role.id" :label="role.name"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="部门" prop="roleId">
            <el-select label="选择角色" v-model="userFormModel.departmentId">
              <template v-for="department in entireDepartments" :key="department.id">
                <el-option :value="department.id" :label="department.name"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleUserCommit"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'

import usePageStore from '@/store/page'
import { useSystemStore } from '@/store/system'

const systemStore = useSystemStore()

const dialogVisible = ref(false)

const userFormModel = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const isEditState = ref(false)
const updateUserId = ref()

const showDialogVisible = (isEdit: boolean = false, itemData?: any) => {
  isEditState.value = isEdit

  dialogVisible.value = true
  if (isEdit && itemData) {
    for (const key of Object.keys(userFormModel)) {
      userFormModel[key] = itemData[key]
    }
    updateUserId.value = itemData.id
  } else {
    for (const key of Object.keys(userFormModel)) {
      userFormModel[key] = ''
    }
  }
}

const handleUserCommit = () => {
  dialogVisible.value = false
  if (isEditState.value) {
    systemStore.updateUserAction(updateUserId.value, userFormModel)
  } else {
    systemStore.createUserAction(userFormModel)
  }
}

const { entireRoles, entireDepartments } = storeToRefs(usePageStore())

defineExpose({
  showDialogVisible
})
</script>

<style scoped></style>
