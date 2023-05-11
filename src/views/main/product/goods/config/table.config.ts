import type { ItableConfig } from '@/types/table'

const tableConfig: ItableConfig = {
  title: '',
  newItemText: '新建商品',
  columnProps: [
    {
      type: 'index',
      prop: '',
      width: 60
    },
    {
      label: '商品名称',
      prop: 'name',
      width: 120
    },
    { prop: 'oldPrice', label: '原价格', minWidth: '100' },
    { prop: 'newPrice', label: '新价格', minWidth: '100' },
    { prop: 'desc', label: '商品描述', minWidth: '100' },
    { prop: 'status', label: '状态', minWidth: '100' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'imageSlot' },
    { prop: 'inventoryCount', label: '库存', minWidth: '80' },
    { prop: 'saleCount', label: '销量', minWidth: '80' },
    { prop: 'favorCount', label: '收藏', minWidth: '80' },
    { prop: 'address', label: '地址', minWidth: '80' },
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
