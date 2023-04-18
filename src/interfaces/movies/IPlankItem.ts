export interface IPlankItem {
  plankName: string
  filterType: string
  dropDawnList: IDropDawn[]
}

export interface IDropDawn {
  name: string
  value: string
  icon?: string
}