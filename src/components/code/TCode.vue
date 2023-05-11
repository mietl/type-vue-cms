<template>
  <div class="tcode">
    <pre class="bg">
      <code :class="'language'+lang" v-html="highCode"></code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css'

interface IProps {
  lang: string
  code: string
}
const props = withDefaults(defineProps<IProps>(), {
  lang: 'html'
})

const highCode = ref<string>('')
watchEffect(() => {
  highCode.value = hljs.highlight(props.code, {
    language: props.lang
  }).value
})
</script>

<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
