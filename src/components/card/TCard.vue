<template>
  <el-card class="card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>
<script setup lang="ts">
interface IProps {
  title: string
}
defineProps<IProps>()
</script>

<style lang="less" scoped>
.card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  align-items: center;
  height: 30px;
}
</style>
