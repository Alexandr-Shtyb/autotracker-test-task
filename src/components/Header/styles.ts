import styled from '@emotion/styled'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import ListItem from '@mui/material/ListItem'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

export const AppCustomBar = styled(AppBar)`
  width: calc(100% - 50px);
`

export const HeaderList = styled(List)`
  display: flex;
`

export const HeaderListItem = styled(ListItem)`
  width: auto;
`

export const HeaderListItemLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

export const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

export const BoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`