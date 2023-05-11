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
    xAxis: {
      type: 'category',
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.values,
        type: 'line',
        smooth: true
      }
    ]
  }
})
</script>

<style scoped></style>
