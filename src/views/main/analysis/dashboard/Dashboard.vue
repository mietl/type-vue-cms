<template>
  <div>
    <el-row :gutter="12">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <CountCard v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="12" class="mt">
      {{}}
      <el-col :span="7">
        <TCard title="商品分类数量">
          <PieEchart :pieData="analysis.pieGoodsCategoryCount"></PieEchart>
        </TCard>
      </el-col>
      <el-col :span="10">
        <TCard title="商品分类数量"> </TCard>
      </el-col>
      <el-col :span="7">
        <TCard title="商品分类数量"> </TCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CountCard from '../components/CountCard.vue'
import PieEchart from '../components/PieEchart.vue'

import useAnalysisStore from '@/store/analysis'

import { storeToRefs } from 'pinia'

const analysis = useAnalysisStore()
analysis.getAnalysisDataAction()

const { amountList } = storeToRefs(analysis)
</script>

<style scoped></style>
