<template>
  <el-dialog v-model="dialogVisible" title="新建用户" width="33%" center>
    <el-form label-width="70">
      <template v-for="item in modalConfig.formItems" :key="item.prop">
        <el-row :gutter="20">
          <el-col :span="item.span ?? 24">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="pageFormModel[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="pageFormModel[item.prop]"
                  type="daterange"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                >
                </el-date-picker>
              </template>
              <template v-if="item.type === 'select'">
                <el-select v-model="pageFormModel[item.prop]" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                  ></el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
      </template>
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

import type { IModalConfig } from '../page-table/type'

import { useSystemStore } from '@/store/system'

const systemStore = useSystemStore()

const dialogVisible = ref(false)

interface IModalProps {
  pageName: string
  modalConfig: IModalConfig
}

const props = defineProps<IModalProps>()
const setupFormModel: any = {}
for (const item of props.modalConfig.formItems) {
  setupFormModel[item.prop] = '' // 默认值可以在这里添加
}

const pageFormModel = reactive<any>(setupFormModel)

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
      //  默认值会被这里清空，没有设置默认值的需要就不设置默认值了，懒得写了
      pageFormModel[key] = ''
    }
  }
}

const handleFormCommit = () => {
  dialogVisible.value = false
  if (isEditState.value) {
    systemStore.updateItemAction(props.pageName, updateItemId.value, pageFormModel)
  } else {
    systemStore.createItemAction(props.pageName, pageFormModel)
  }
}

defineExpose({
  showDialogVisible
})
</script>

<style scoped></style>
