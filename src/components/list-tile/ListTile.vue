<template>
  <div class="t-list">
    <template v-for="(item, index) in data" :key="index">
      <div class="item">
        <span class="title">{{ item.title }}:</span>
        <el-link type="primay">{{ item.desp }}</el-link>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any[] }>()
</script>

<style lang="less" scoped>

.t-list {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .item {
    margin: 5px;

    .title {
      position: relative;
      display: inline-block;
      margin-right: 20px;

      &::before {
        position: absolute;
        top: 40%;
        left: -15px;
        width: 5px;
        height: 5px;
        background: black;
        border-radius: 100%;
        content: '';
      }
    }
  }
}
</style>
