export interface IPlankItem {
  plankName: string
  hasIcon: boolean
  dropDawnList: IDropDawn[]
}

export interface IDropDawn {
  name: string
  value: string
  icon?: string
}