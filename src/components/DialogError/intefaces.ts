import { Dispatch, SetStateAction } from 'react'

export interface IDialogErrorProps {
  openDialog: boolean
  setOpenDialog: Dispatch<SetStateAction<boolean>>
}
