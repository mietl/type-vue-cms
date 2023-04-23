<template>
  <div></div>
</template>

<script setup lang="ts">
interface IProps {
  item: {
    type: string
    label: string
    prop: string
    placeholder?: string
  }
}
defineProps<IProps>()
</script>

<style scoped></style>
