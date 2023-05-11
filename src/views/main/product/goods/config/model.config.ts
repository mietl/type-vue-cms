import type { IModalConfig } from '@/types/table'
const modalConfig: IModalConfig = {
  title: {
    edit: '编辑商品',
    new: '新建商品'
  },
  formItems: [
    {
      label: '商品名称',
      type: 'input',
      prop: 'name',
      placeHolder: '请输入商品名称'
    },
    {
      label: '商品描述',
      type: 'input',
      prop: 'description',
      placeHolder: '请输入商品描述'
    },
    {
      label: '原价',
      type: 'input',
      prop: 'price',
      placeHolder: '请输入原价'
    },
    {
      label: '现价',
      type: 'input',
      prop: 'nowPrice',
      placeHolder: '请输入现价'
    },
    {
      label: '库存',
      type: 'input',
      prop: 'count',
      placeHolder: '请输入库存'
    },
    {
      label: '图片',
      type: 'input',
      prop: 'imgUrl',
      placeHolder: '请输入图片地址'
    }
  ]
}
export default modalConfig
