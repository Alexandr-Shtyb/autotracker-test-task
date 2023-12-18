import { Dispatch, SetStateAction } from 'react'
import { ITableData } from '../../pages/DeviceList/interfaces'

export interface ITableProps {
  listTH: string[]
  listTD: string[]
  tableData: ITableData[]
  setTableData: Dispatch<SetStateAction<ITableData[]>>
}
