<template>
  <div>
    <span ref="counterRef"></span>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

import { onMounted, ref } from 'vue'
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 1, // 动画时长
  separator: ',', // 千位分割
  decimal: '.', // 小数分割
  prefix: '￥' // 单位
}

interface IProps {
  number: number
  options?: CountUpOptions
}

const props = withDefaults(defineProps<IProps>(), {
  number: 0
})

const counterRef = ref<HTMLElement | null>(null)

const createCounter = () => {
  if (!counterRef.value) return
  const counterOptions = Object.assign(defaultOptions, props.options)
  const instance = new CountUp(counterRef.value, props.number, counterOptions)
  instance.start()
}

onMounted(() => {
  createCounter()
})
</script>

<style scoped></style>
