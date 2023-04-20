import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export interface IPlankItem {
  plankName: string
  filterType: string
  values: string[]
  dropDawnList: IDropDawn[]
}

export interface IDropDawn {
  name: string
  value: string
  icon?: string
}