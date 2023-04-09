<template>
  <el-breadcrumb>
    <template v-for="(crumbItem, index) in pathCrumbs" :key="index">
      <el-breadcrumb-item :to="crumbItem.path">{{ crumbItem.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { trackMenuPath } from '@/utils/map_menu'
import useUserStore from '@/store/user'

const currentRoute = useRoute()
const userMenus = useUserStore().userMenus
const pathCrumbs = trackMenuPath(currentRoute.path, userMenus)
</script>

<style scoped></style>
