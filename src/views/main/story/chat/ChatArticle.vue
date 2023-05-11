<template>
  <div class="header">
    <div>开始撰写你的故事吧!</div>
  </div>
  <TEditor v-model:value="htmlStr" :height="270"></TEditor>
  <!-- text="primary" -->
  <div class="action">
    <el-input
      size="large"
      class="title"
      v-model="title"
      maxlength="14"
      placeholder="请输入标题"
      show-word-limit
      type="text"
    />
    <el-button type="primary" class="post-btn" @click="post">发布</el-button>
  </div>
</template>

<script setup lang="ts">
import TEditor from '@/components/editor/TEditor.vue'
import { ref } from 'vue'
import useStoryStore from '@/store/story'
const htmlStr = ref<string>('')

let title = ref('')

const storyStore = useStoryStore()
const post = () => {
  storyStore.postArticleAction(title.value, htmlStr.value)
  htmlStr.value = ''
  title.value = ''
}
</script>

<style lang="less" scoped>
@import '@/assets/css/layout.less';

.header {
  background: #fff;
  padding: 12px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #c9d8db;
  border-bottom: 0;
}
.action {
  text-align: right;

  .title :deep(.el-input__wrapper) {
    // border-radius:;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    box-shadow: 0 -1px 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
  }
  .post-btn {
    margin-top: 5px;
  }
}
</style>
