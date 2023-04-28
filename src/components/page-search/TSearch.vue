<template>
  <div class="search-form">
    <el-form label-width="80px" :model="searchFormModel" ref="searchFormRef">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <!-- v-model:[item.prop]="searchFormModel[item.prop]" -->
            <TFormTile
              :item="item"
              :value="searchFormModel[item.prop]"
              @update:model-value="searchFormModel[item.prop] = $event"
            ></TFormTile>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="search-actions">
      <el-button @click="clearForm" color="#626aef" plain>
        <el-icon>
          <ep-refresh></ep-refresh>
        </el-icon>
        <span style="margin-left: 5px">清空</span>
      </el-button>
      <el-button @click="searchFrom" color="#3498db" plain>
        <el-icon>
          <ep-search></ep-search>
        </el-icon>
        <span style="margin-left: 5px">查询</span>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import TFormTile from '@/components/form-tile/TFormTile.vue'
import type { ITileItem } from '@/types/form'

interface IProps {
  searchConfig: {
    labelWidth?: string
    formItems: ITileItem[]
  }
}

const props = defineProps<IProps>()

const emit = defineEmits(['searchForm', 'clearForm'])
const searchFormRef = ref<InstanceType<typeof ElForm>>()

const formModel: any = {}
for (const item of props.searchConfig.formItems) {
  formModel[item.prop] = item.value ?? ''
}
const searchFormModel = reactive<any>(formModel)

const clearForm = () => {
  searchFormRef.value?.resetFields()
  emit('clearForm')
}

const searchFrom = () => {
  emit('searchForm', searchFormModel)
}
</script>

<style scoped lang="less">
.search-form {
  .el-form-item {
    padding: 10px 30px;
  }

  .search-actions {
    text-align: right;
  }
}
</style>
