<template>
  <div class="echart" ref="echartRef"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

import { ref, onMounted, watchEffect } from 'vue'

const echartRef = ref<HTMLElement>()

interface IProps {
  options: EChartsOption
}

const props = defineProps<IProps>()

onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', {
    renderer: 'canvas'
  })

  echartInstance.setOption
  // options 发生改变时，重新设置配置,目的是视图更新
  watchEffect(() => {
    echartInstance.setOption(props.options)
  })

  // 窗口变化，图表适应
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
echarts.init
</script>

<style scoped>
.echart {
  height: 300px;
}
</style>
