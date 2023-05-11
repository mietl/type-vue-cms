<template>
  <div class="overview">
    <TCard title="关于">
      <div class="t-left">
        这是一个基于
        Vue3、Pinia、VueRouter、Vite、ElementPlus、TypeScript和Echart5等技术实现的后台系统解决方案
      </div>
    </TCard>

    <TCard title="技术栈">
      <ListTile :data="technology"></ListTile>
      <Description title="生产环境依赖" :column="2" :table-data="dependencies" />
      <Description title="开发环境依赖" :column="2" :table-data="devDesciptions" />
    </TCard>
    <TCard title="项目目录结构">
      <div style="text-align: left">
        <TCode language="bash" :code="projectTree"></TCode>
      </div>
    </TCard>

    <TCard title="项目规范">
      <Description title="文件命名规范" :column="1" :table-data="filename" />
      <Description title="编写组件规范" :column="1" :table-data="editCompoennt" />
    </TCard>

    <TCard title="Git提交规范">
      <Description :column="1" :table-data="gitCommit" />
    </TCard>
  </div>
</template>

<script setup lang="ts">
import TCard from '@/components/card/TCard.vue'
import ListTile from '@/components/list-tile/ListTile.vue'
import Description from '@/components/description/Description.vue'
import { dependencies, devDesciptions, projectTree, technology } from './project-config'

const gitCommit = [
  { name: 'add 操作', description: 'git add ' },
  { name: 'commit 操作', description: 'yarn commit ' },
  { name: 'pull 操作', description: 'git pull ' },
  { name: 'push 操作', description: 'git push ' }
]

const filename = [
  { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
  {
    name: '文件(.ts .vue .json .d.ts)',
    description: '统一大写, 多个单词使用大驼峰命名法（Pascal Case）'
  }
]

const editCompoennt = [
  { name: '组件的文件', description: '统一小写, 多个单词使用-分割' },
  {
    name: '组件的目录结构',
    description: ''
  },
  {
    name: '组件导包顺序',
    description: '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数'
  },
  { name: '组件的名称', description: '统一大写开头，驼峰命名(Pascal Case）' },
  { name: '组件属性顺序', description: 'name, components, props, emits, setup ...' },
  {
    name: 'template标签属性顺序',
    description: 'v-if , v-for , ref, class, style, ... ,事件'
  },
  { name: '组件的props', description: '小写开头，驼峰命名，必须编写类型默认值' },
  {
    name: '组件的样式',
    description: '作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割'
  }
]
</script>

<style lang="less" scoped>
.overview {
  .el-card {
    margin-bottom: 20px;
    &:deep(.el-card__header span) {
      font-weight: 700;
    }
  }
}
</style>
