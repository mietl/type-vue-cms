<template>
  <div class="search-form">
    <el-form label-width="80px" :model="searchFormModel" ref="searchFormRef">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <!-- <TSearchItem :item="item"></TSearchItem> -->
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchFormModel[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchFormModel[item.prop]"
                  type="daterange"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                >
                </el-date-picker>
              </template>
              <template v-if="item.type === 'select'">
                <el-select v-model="searchFormModel[item.prop]">
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

interface IProps {
  searchConfig: {
    labelWidth?: string
    formItems: any[]
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
