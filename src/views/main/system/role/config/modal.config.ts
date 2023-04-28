import type { IModalConfig } from '@/types/table'
const modalConfig: IModalConfig = {
  title: {
    edit: '编辑角色',
    new: '新建角色'
  },
  formItems: [
    {
      label: '角色名称',
      prop: 'name',
      type: 'input'
    },
    {
      label: '角色描述',
      prop: 'intro',
      type: 'input'
    },
    {
      label: '菜单选择',
      slotName: 'menulist',
      prop: 'menuList',
      type: 'custom'
    }
  ]
}
export default modalConfig
