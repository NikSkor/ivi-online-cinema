import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export interface IRangeItem {
  title: string
  maxValue: number
  step: number
  isFloat?: boolean
  rangeType: string
}