<template>
  <el-form-item :label="item.label" :prop="item.prop">
    <template v-if="item.type === 'input'">
      <el-input v-model="inputValue" :placeholder="item.placeholder"></el-input>
    </template>
    <template v-if="item.type === 'date-picker'">
      <el-date-picker
        v-model="inputValue"
        type="daterange"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
      >
      </el-date-picker>
    </template>
    <template v-if="item.type === 'select'">
      <el-select v-model="inputValue" style="width: 100%">
        <el-option
          v-for="option in item.options"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        ></el-option>
      </el-select>
    </template>
    <template v-if="item.type === 'switch'">
      <el-switch v-model="inputValue" v-bind="item" />
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ITileItem } from '@/types/form'
interface IProps {
  item: ITileItem
  value: any
}

const props = defineProps<IProps>()
const emits = defineEmits(['update:modelValue'])

const inputValue = computed({
  get(): string {
    return props.value
  },
  set(v: string) {
    emits('update:modelValue', v)
  }
})
</script>

<style scoped></style>
