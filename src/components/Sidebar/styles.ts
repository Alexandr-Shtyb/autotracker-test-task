import styled from '@emotion/styled'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'

export const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 50px;
  }
`

export const WrapperIconButton = styled(Box)`
  display: flex;
  align-items: center;
  min-height: 64px;
`

export const WrapperSidebarPages = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const CustomNavLink = styled(NavLink)`
  &.active {
    .MuiButtonBase-root {
      background-color: #1976d2;
    }

    .MuiSvgIcon-root {
      color: #fff;
    }
  }
`
