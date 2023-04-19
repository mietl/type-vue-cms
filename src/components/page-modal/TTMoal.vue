<template>
  <el-dialog v-model="dialogVisible" title="新建用户" width="33%" center>
    <el-form label-width="70">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="pageFormModel.name"></el-input>
      </el-form-item>
      <el-form-item label="部门领导" prop="leader">
        <el-input v-model="pageFormModel.leader"></el-input>
      </el-form-item>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="上级部门" prop="parentId">
            <el-select label="选择角色" v-model="pageFormModel.parentId">
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
        <el-button type="primary" @click="handleFormCommit"> 确定 </el-button>
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

interface IModalProps {
  title?: string
  searchConfig: {
    labelWidth?: string
    formItems: any[]
  }
}

// const props = defineProps<IModalProps>()
// const setupFormModel: any = {}
// for (const item of props.modalConfig.formItems) {
//   setupFormModel[item.prop] = item.value ?? ''
// }

// setupFormModel

const pageFormModel = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})

const isEditState = ref(false)
const updateItemId = ref()

const showDialogVisible = (isEdit: boolean = false, itemData?: any) => {
  isEditState.value = isEdit
  dialogVisible.value = true
  if (isEdit && itemData) {
    for (const key of Object.keys(pageFormModel)) {
      pageFormModel[key] = itemData[key]
    }
    updateItemId.value = itemData.id
  } else {
    for (const key of Object.keys(pageFormModel)) {
      pageFormModel[key] = ''
    }
  }
}

const handleFormCommit = () => {
  dialogVisible.value = false
  if (isEditState.value) {
    systemStore.updateItemAction('department', updateItemId.value, pageFormModel)
  } else {
    systemStore.createItemAction('department', pageFormModel)
  }
}

const { entireDepartments } = storeToRefs(usePageStore())

defineExpose({
  showDialogVisible
})
</script>

<style scoped></style>
