<template>
  <div>
    <el-row :gutter="12">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <CountCard v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="12" class="mt">
      <el-col :span="7">
        <TCard title="分类商品数量(饼图)">
          <PieEchart :pieData="pieData"></PieEchart>
        </TCard>
      </el-col>
      <el-col :span="10">
        <TCard title="不同城市商品销量">
          <MapEchart :mapData="mapData"></MapEchart>
        </TCard>
      </el-col>
      <el-col :span="7">
        <TCard title="分类商品销量(玫瑰图)">
          <RoseEchart :roseData="roseData"></RoseEchart>
        </TCard>
      </el-col>
    </el-row>

    <el-row :gutter="12" class="mt">
      <el-col :span="12">
        <TCard title="分类商品收藏">
          <LineEchart :values="lineData.values" :labels="lineData.labels"></LineEchart>
        </TCard>
      </el-col>
      <el-col :span="12">
        <TCard title="销量前10的商品数量">
          <BarEchart :values="barData.values" :labels="barData.labels"></BarEchart>
        </TCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CountCard from '../components/CountCard.vue'

import PieEchart from '../components/PieEchart.vue'
import RoseEchart from '../components/RoseEchart.vue'
import LineEchart from '../components/LineEchart.vue'
import BarEchart from '../components/BarEchart.vue'
import MapEchart from '../components/MapEchart.vue'

import useAnalysisStore from '@/store/analysis'

import { storeToRefs } from 'pinia'

const analysis = useAnalysisStore()
analysis.getAnalysisDataAction()

const {
  amountList,
  goodsCategoryCount,
  goodsCategorySale,
  goodsCategoryFavor,
  goodsSaleTop10,
  goodsAreaSale
} = storeToRefs(analysis)

const mapNameValue = (arr: any, namekey = 'name', valuekey = 'goodsCount') => {
  return arr.map((goods: any) => {
    return { name: goods[namekey], value: goods[valuekey] }
  })
}
const pieData = computed(() => {
  return mapNameValue(goodsCategoryCount.value)
})

const roseData = computed(() => {
  return mapNameValue(goodsCategorySale.value)
})

const mapData = computed(() => {
  return mapNameValue(goodsAreaSale.value, 'address', 'count')
})

const mapLabelsValues = (list: any[], hook: (item: any, labels: any[], values: any[]) => void) => {
  let labels: string[] = []
  let values: any[] = []
  list.map((item: any) => hook(item, labels, values))
  return {
    labels,
    values
  }
}

const lineData = computed(() => {
  return mapLabelsValues(goodsCategoryFavor.value, (item, labels, values) => {
    labels.push(item.name)
    values.push(item.goodsFavor)
  })
})

const barData = computed(() => {
  return mapLabelsValues(goodsSaleTop10.value, (item, labels, values) => {
    // labels.push(item.name.slice(0, 4))
    labels.push(item.name)
    values.push(item.saleCount)
  })
})
</script>

<style scoped></style>
