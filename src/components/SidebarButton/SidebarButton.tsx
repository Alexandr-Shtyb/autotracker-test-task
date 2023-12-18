import { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import { ISidebarButtonProps } from './interfaces'

const SidebarButton: FC<ISidebarButtonProps> = ({ children }) => {
  return (
    <IconButton aria-label="delete" size="large">
      {children}
    </IconButton>
  )
}

export default SidebarButton
