<template>
  <el-breadcrumb>
    <template v-for="(crumbItem, index) in pathCrumbs" :key="index">
      <el-breadcrumb-item :to="crumbItem.path">{{ crumbItem.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { trackMenuPath } from '@/utils/map_menu'
import useLoginStore from '@/store/login'

const currentRoute = useRoute()
const userMenus = useLoginStore().userMenus

// 显示当前页面面包屑
const pathCrumbs = computed(() => {
  return trackMenuPath(currentRoute.path, userMenus)
})
</script>

<style scoped></style>
