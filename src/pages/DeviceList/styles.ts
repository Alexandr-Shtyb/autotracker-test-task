import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'

export const AppWrapper = styled(Container)`
  max-width: 1800px;  
`

export const ActionsTableWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  padding-left: 50px;
  margin-bottom: 50px;
`

export const SearchAndTabsWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const CustomTabsBlock = styled(Tabs)`
  max-width: 300px;
`
