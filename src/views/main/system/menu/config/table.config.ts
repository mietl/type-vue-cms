import type { ItableConfig } from '@/types/table'
const tableConfig: ItableConfig = {
  title: '菜单管理',
  columnProps: [
    {
      label: '菜单名称',
      prop: 'name',
      width: 140
    },
    {
      label: '级别',
      prop: 'type',
      width: 60
    },
    {
      label: '路径',
      prop: 'url',
      width: 200
    },
    {
      label: '排序',
      prop: 'sort',
      width: 60
    },
    {
      label: '权限',
      prop: 'permission',
      width: 200
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
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProps: {}
  }
}

export default tableConfig
