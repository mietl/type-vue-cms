import type { ItableConfig } from '@/types/table'
const tableConfig: ItableConfig = {
  title: '',
  columnProps: [
    { prop: 'title', label: '故事标题', minWidth: '120' },
    { prop: 'content', label: '我的故事', minWidth: '500', type: 'custom', slotName: 'content' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', type: 'timeAt' }
  ]
}

export default tableConfig
