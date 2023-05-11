<template>
  <div class="pie">
    <BaseEchart :options="pieOptions"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import BaseEchart from '@/components/echarts/BaseEchart.vue'
import type { EChartsOption } from 'echarts'

import type { IPieDataItem } from './types'

interface IProps {
  pieData: IPieDataItem[]
}

const props = defineProps<IProps>()

const pieOptions = computed<EChartsOption>(() => {
  return {
    // 手指放上去的时候显示的文本
    tooltip: {
      trigger: 'item'
    },
    // 图例:
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        // bottom: '-10%',
        data: props.pieData
      }
    ]
  }
})
</script>

<style scoped></style>
