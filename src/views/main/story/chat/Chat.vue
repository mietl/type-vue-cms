<template>
  <div>
    <TEditor v-model:value="htmlStr"></TEditor>
    {{ htmlStr }}
  </div>
</template>

<script setup lang="ts">
import TEditor from './components/t-editor/TEditor.vue'
import { ref } from 'vue'
const htmlStr = ref<string>('ty')
</script>

<style scoped></style>
