<template>
  <div>
    <BaseEchart :options="roseOptions"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import type { IPieDataItem } from './types'

import BaseEchart from '@/components/echarts/BaseEchart.vue'

interface IProps {
  roseData: IPieDataItem[]
}
const props = defineProps<IProps>()

const roseOptions = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'top'
    },
    toolbox: {
      show: true,
      bottom: 0,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '来源',
        type: 'pie',
        radius: [20, 140],
        center: ['50%', '50%'],
        top: 100,
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        label: {
          show: false
        },
        // emphasis: {
        //   label: {
        //     show: true
        //   }
        // },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped></style>
