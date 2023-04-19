<template>
  <div>
  
  </div>
</template>

<script setup lang="ts">
interface IProps {
  item: {
    type: string
    label: string
    prop: string
    placeholder?: string
  }
}
defineProps<IProps>()
</script>

<style scoped></style>

<!-- <el-col :span="8">
  <el-form-item label="部门领导" prop="realname">
  </el-form-item>
</el-col>
<el-col :span="8">
  <el-form-item label="状态" prop="enable">
    <el-switch v-model="searchFormModel.enable" :active-value="1" :inactive-value="0" />
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
-->
