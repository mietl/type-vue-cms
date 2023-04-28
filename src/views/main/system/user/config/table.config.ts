import type { ItableConfig } from '@/types/table'

const tableConfig: ItableConfig = {
  title: '用户列表',
  newItemText: '新建用户',
  columnProps: [
    {
      type: 'index',
      prop: '',
      width: 60
    },
    {
      label: '用户名',
      prop: 'name',
      width: 120
    },
    {
      label: '姓名',
      prop: 'realname',
      width: 120
    },
    {
      label: '状态',
      prop: 'enable',
      width: 90,
      type:'custom',
      slotName:'enable'
    },
    {
      label: '电话号码',
      prop: 'cellphone',
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
