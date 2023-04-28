type IFormTileType = 'input' | 'date-picker' | 'select' | 'custom' | 'switch'
export interface ITileItem {
  label: string
  type?: IFormTileType
  prop: string
  placeholder?: string
  options?: Array<{ value: any; label: string }>
  [key: string]: any
}
