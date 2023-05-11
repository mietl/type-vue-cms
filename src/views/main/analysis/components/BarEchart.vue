<template>
  <div>
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'

import BaseEchart from '@/components/echarts/BaseEchart.vue'

interface IProps {
  values: any[]
  labels: string[]
}
const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    xAxis: [
      {
        type: 'category',
        data: props.labels,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          formatter: function (value: any) {
            var maxLength = 3 // 设置最大长度
            var labelStr = value.toString()
            if (labelStr.length > maxLength) {
              labelStr = labelStr.substring(0, maxLength) + '...'
            }
            return labelStr
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '商品',
        type: 'bar',
        barWidth: '60%',
        data: props.values
      }
    ]
  }
})
</script>

<style scoped></style>
