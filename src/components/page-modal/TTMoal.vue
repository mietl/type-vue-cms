<template>
  <el-dialog
    v-model="dialogVisible"
    :title="isEditState ? modalConfig.title.edit : modalConfig.title.new"
    width="33%"
    center
  >
    <el-form label-width="70">
      <el-row :gutter="20">
        <template v-for="item in modalConfig.formItems" :key="item.prop">
          <el-col :span="item.span ?? 24">
            <template v-if="item.slotName">
              <el-form-item :label="item.label" :prop="item.prop">
                <slot :name="item.slotName"></slot>
              </el-form-item>
            </template>
            <template v-else>
              <TFormTile
                v-show="!item.hidden"
                :item="item"
                :value="pageFormModel[item.prop]"
                @update:model-value="pageFormModel[item.prop] = $event"
              ></TFormTile>
            </template>
          </el-col>
        </template>
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
import TFormTile from '@/components/form-tile/TFormTile.vue'

import { reactive, ref } from 'vue'

import type { IModalConfig } from '@/types/table'

import { useSystemStore } from '@/store/system'

import { inject } from 'vue'

const systemStore = useSystemStore()

const dialogVisible = ref(false)

const payloadData: any = inject('payloadData')

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
  let assignForm = pageFormModel
  if (payloadData) {
    assignForm = { ...pageFormModel, ...payloadData }
  }

  dialogVisible.value = false
  if (isEditState.value) {
    systemStore.updateItemAction(props.pageName, updateItemId.value, assignForm)
  } else {
    systemStore.createItemAction(props.pageName, assignForm)
  }
}

defineExpose({
  showDialogVisible
})
</script>

<style scoped></style>
