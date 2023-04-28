import type { IModalConfig } from '@/types/table'
const modalConfig: IModalConfig = {
  title: {
    edit: '编辑部门',
    new: '新建部门'
  },
  formItems: [
    {
      label: '部门名称',
      prop: 'name',
      type: 'input',
      value: '12323'
    },
    {
      label: '部门领导',
      prop: 'leader',
      type: 'input'
    },
    {
      label: '上级部门',
      prop: 'parentId',
      type: 'select'
    }
  ]
}
export default modalConfig
