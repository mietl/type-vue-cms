import type { ItableConfig } from '@/types/table'

const tableConfig: ItableConfig = {
  title: '角色列表',
  newItemText: '新建角色',
  columnProps: [
    {
      type: 'index',
      prop: '',
      width: 60
    },
    {
      label: '角色名称',
      prop: 'name',
      width: 120
    },
    {
      label: '权限介绍',
      prop: 'intro',
      width: 120
    },
    {
      type: 'timeAt',
      label: '创建时间',
      prop: 'createAt'
    },
    {
      type: 'timeAt',
      label: '最近修改',
      prop: 'updateAt'
    },
    {
      type: 'handler',
      prop: '',
      label: '操作',
      width: 150
    }
  ]
}

export default tableConfig
