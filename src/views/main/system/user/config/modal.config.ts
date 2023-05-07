import type { IModalConfig } from '@/types/table'
const modalConfig: IModalConfig = {
  title: {
    edit: '编辑角色',
    new: '新建用户'
  },
  formItems: [
    {
      label: '用户名',
      prop: 'name',
      type: 'input'
    },
    {
      label: '姓名',
      prop: 'realname',
      type: 'input'
    },
    {
      label: '密码',
      prop: 'password',
      type: 'input',
      showPassword: true
    },
    {
      label: '电话号码',
      prop: 'cellphone',
      type: 'input'
    },
    {
      span: 12,
      label: '选择角色',
      prop: 'roleId',
      type: 'select'
    },
    {
      span: 12,
      label: '选择部门',
      prop: 'departmentId',
      type: 'select'
    }
  ]
}
export default modalConfig
