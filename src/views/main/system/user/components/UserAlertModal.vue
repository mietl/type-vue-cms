<template>
  <el-dialog v-model="dialogVisible" title="新建用户" width="33%" center>
    <el-form label-width="70">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="newUserForm.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="realname">
        <el-input v-model="newUserForm.realname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="newUserForm.password"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="cellphone">
        <el-input v-model="newUserForm.cellphone"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="角色" prop="roleId">
            <el-select label="选择角色">
              <template v-for="role in entireRoles" :key="role.id">
                <el-option :value="role.id" :label="role.name"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="部门" prop="roleId">
            <el-select label="选择角色">
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
        <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'

import usePageStore from '@/store/page'

const dialogVisible = ref(false)

const changeDialogVisible = (isShow: boolean) => {
  dialogVisible.value = isShow
}

const { entireRoles, entireDepartments } = storeToRefs(usePageStore())

const newUserForm = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

defineExpose({
  changeDialogVisible
})
</script>

<style scoped></style>
