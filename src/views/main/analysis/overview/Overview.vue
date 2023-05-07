<template>
  <div class="overview">
    <TCard title="关于">
      <div class="t-left">
        基于 Vue3、Pinia、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等实现的后台系统解决方案。
      </div>
    </TCard>

    <TCard title="技术栈">
      <!-- <hy-text-link :text-arrs="technologyStacks" /> -->
      <!-- <hy-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" /> -->
      <!-- <hy-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" /> -->
    </TCard>
    <TCard title="项目目录结构">
      <!-- <hy-text-link :text-arrs="technologyStacks" /> -->
      <!-- <hy-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" /> -->
      <!-- <hy-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" /> -->
    </TCard>

    <TCard title="项目规范">
      <!-- <hy-text-link :text-arrs="technologyStacks" /> -->
      <!-- <hy-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" /> -->
      <!-- <hy-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" /> -->
    </TCard>

    <TCard title="Git提交规范">
      <!-- <hy-text-link :text-arrs="technologyStacks" /> -->
      <!-- <hy-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" /> -->
      <!-- <hy-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" /> -->
    </TCard>
  </div>
</template>

<script setup lang="ts">
import TCard from '@/components/card/TCard.vue'
</script>

<style lang="less" scoped>
.overview {
  .el-card {
    margin-bottom: 20px;
    &:deep(.el-card__header span) {
      font-weight: 700;
    }
  }
}
</style>
