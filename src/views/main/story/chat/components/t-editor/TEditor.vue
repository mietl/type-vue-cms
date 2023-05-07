<template>
  <div ref="editorRef" class="t-editor" style="width: 100%"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, onBeforeMount } from 'vue'

interface IProps {
  value: string
  width?: number
  height?: number
  isDefault: boolean
  isFocus?: boolean
}
export interface EditorInfo {
  html: string
  text: string
}

const props = withDefaults(defineProps<IProps>(), {
  isFocus: true,
  height: 400,
  isDefault: true
})

import WangEditor from 'wangeditor'
import type Editor from 'wangeditor'

const editorRef = ref(null)

const content = reactive<EditorInfo>({
  html: '',
  text: ''
})

const instance = ref<Editor | null>(null)

const emit = defineEmits(['update:value'])

const setDefaultContent = (editor: Editor, htmlStr: string) => {
  if (!editor) return
  if (!htmlStr) return

  if (props.isDefault) {
    editor.txt.html(htmlStr)
  }
}

const setEditorConfig = (editor: Editor) => {
  editor.config.height = props.height
  editor.config.focus = props.isFocus

  editor.config.onchange = function (newHtml: string) {
    content.html = newHtml
    content.text = editor.txt.text()

    emit('update:value', content.html)
  }
}

const createWangEditor = () => {
  instance.value = new WangEditor(editorRef.value)

  const editor: Editor = instance.value as Editor
  setEditorConfig(editor)
  instance.value.create()

  setDefaultContent(editor, props.value)
}
onMounted(() => {
  createWangEditor()
})

onBeforeMount(() => {
  if (!instance.value) return
  instance.value.destroy()
  instance.value = null
})
</script>

<style scoped>
.t-editor {
  padding-top: 20px;
}
</style>
