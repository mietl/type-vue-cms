<template>
  <div class="nav-header">
    <div @click="handleCollapse" class="collapse-icon">
      <line-md-menu-unfold-left v-show="!isCollapseState" :style="{ fontSize: '18px' }" />
      <line-md-menu-unfold-right v-show="isCollapseState" :style="{ fontSize: '18px' }" />
    </div>

    <div class="nav-tools">
      <nav-crumbs></nav-crumbs>
      <user-nav-toolbar></user-nav-toolbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserNavToolbar from './components/UserNavToolbar.vue'
import NavCrumbs from './components/NavCrumbs.vue'

import { ref } from 'vue'

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
    margin-right: 8px;
  }

  .nav-tools {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
