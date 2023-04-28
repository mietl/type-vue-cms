import type { ITileItem } from '@/types/form'
interface ISearchConfig  {
  labelWidth?:string
  formItems:ITileItem[]
}
const searchConfig:ISearchConfig =  {
  formItems: [
    {
      type: 'input',
      label: '用户名',
      prop: 'name',
      placeholder: '请输入查询的用户名'
    },
    {
      type: 'input',
      label: '姓名',
      prop: 'realname',
      placeholder: '请输入查询的姓名'
    },
    {
      type: 'input',
      label: '电话号码',
      prop: 'cellphone',
      placeholder: '请输入查询的电话号码'
    },
    {
      type: 'switch',
      label: '状态',
      prop: 'enable',
      value:1,
      activeValue: 1,
      inactiveValue: 0
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt'
    }
  ]
}


export default searchConfig;