<template>
  <div class="search-form">
    <el-form label-width="80px" :model="searchFormModel" ref="searchFormRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchFormModel.name" placeholder="请输入查询的用户名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="姓名" prop="realname">
            <el-input v-model="searchFormModel.realname" placeholder="请输入查询的姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码">
            <el-input
              v-model="searchFormModel.cellphone"
              placeholder="请输入查询的电话号码"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-switch v-model="searchFormModel.enable" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchFormModel.createAt"
              type="daterange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="search-actions">
      <el-button @click="clearFormValue" color="#626aef" plain>
        <el-icon>
          <ep-refresh></ep-refresh>
        </el-icon>
        <span style="margin-left: 5px">清空</span>
      </el-button>
      <el-button color="#3498db" plain>
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

const searchFormRef = ref<InstanceType<typeof ElForm>>()
const searchFormModel = reactive({
  name: '',
  realname: '',
  enable: 1,
  cellphone: '',
  createAt: []
})

const clearFormValue = () => {
  searchFormRef.value?.resetFields()
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
