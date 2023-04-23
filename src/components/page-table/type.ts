export interface ItableConfig {
  title: string
  newItemText: string
  columnProps: ItableConfigTile[]
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

type IFormTileType = 'input' | 'date-picker' | 'select'
export interface ITileItem {
  label: string
  type?: IFormTileType
  prop: string
  [key: string]: any
}
