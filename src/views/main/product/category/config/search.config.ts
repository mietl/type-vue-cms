import type { ISearchConfig } from '@/types/form'

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: 'input',
      label: '类别名称',
      prop: 'name',
      placeHolder: '请输入类别名称'
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt'
    }
  ]
}

export default searchConfig
