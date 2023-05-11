<template>
  <div class="desc-area">
    <el-descriptions class="mt" :title="title" :column="column" border>
      <template v-for="(item, index) in tableData" :key="index">
        <el-descriptions-item label-class-name="t-label">
          <template #label> {{ item.name }} </template>
          <el-check-tag checked style="margin-right: 8px" v-if="item.description">{{
            item.description
          }}</el-check-tag>
          <!-- <el-tag effect="plain" hit round v-if="item.description">{{ item.description }}</el-tag> -->
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
  column: number
  tableData: any[]
}
defineProps<IProps>()
</script>

<style scoped lang="less">
.desc-area {
  margin-bottom: 12px;

  :deep(.t-label) {
  }

  .el-check-tag {
    padding: 5px 12px;
    font-weight: normal;
  }
}
</style>
