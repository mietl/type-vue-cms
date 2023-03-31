<template>
  <div class="nav-header">
    <el-icon size="25px" class="collapse-icon" @click="handleCollapse"><Expand /></el-icon>
    <div class="headman">
      <div class="breadcrumbs">面包屑</div>
      <user-nav-toolbar></user-nav-toolbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserNavToolbar from './components/UserNavToolbar.vue'

let isCollapseState = ref(false)
const emits = defineEmits(['changeCollapse'])
const handleCollapse = () => {
  isCollapseState.value = !isCollapseState.value
  emits('changeCollapse', isCollapseState.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;

  .collapse-icon {
    display: flex;
    align-items: center;
  }

  .headman {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
