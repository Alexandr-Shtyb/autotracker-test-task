import React from 'react'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
import SidebarButton from '../SidebarButton/SidebarButton'
import LogoutIcon from '@mui/icons-material/Logout'
import { SIDEBAR_ICONS } from '../../constants/global'


import { CustomDrawer, WrapperIconButton, WrapperSidebarPages, CustomNavLink } from './styles'

const Sidebar = () => {
  return (
    <CustomDrawer variant="permanent">
      <WrapperIconButton>
        <SidebarButton>
          <MenuIcon />
        </SidebarButton>
      </WrapperIconButton>

      <Divider />

      <WrapperSidebarPages>
        <Box>
          {SIDEBAR_ICONS.map((item, index) => {
            return <CustomNavLink key={index} to={item.endpoint}><SidebarButton>{item.icon}</SidebarButton></CustomNavLink>
          })}
        </Box>

        <Box>
          <SidebarButton>
            <LogoutIcon />
          </SidebarButton>
        </Box>
      </WrapperSidebarPages>
    </CustomDrawer>
  )
}

export default Sidebar
