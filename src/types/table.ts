import type { ITileItem } from './form'
export interface ItableConfig {
  title?: string | boolean
  newItemText?: string
  columnProps: ItableConfigTile[]
  childrenProps?: {
    rowKey: string | number
    treeProps?: {
      hasChildren?: string
      children?: string
    }
  }
}

type ItableTileType = 'custom' | 'timeAt' | 'handler' | 'index'

export interface ItableConfigTile {
  label?: string
  type?: ItableTileType
  prop: string
  [key: string]: any
}

export interface IModalConfig {
  title: {
    edit: string
    new: string
  }
  formItems: ITileItem[]
}
