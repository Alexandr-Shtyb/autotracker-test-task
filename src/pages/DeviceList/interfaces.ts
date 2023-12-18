import { ReactNode } from 'react'

export interface ITableData {
  attributes: ReactNode
  calendarId: number
  category: number
  contact: string
  disabled: boolean
  expirationTime: string
  groupId: number
  id: number
  lastUpdate: string
  model: string
  name: string
  phone: string
  positionId: number
  status: string
  uniqueId: string
}
