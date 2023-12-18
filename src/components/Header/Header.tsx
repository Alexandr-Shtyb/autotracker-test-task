import Box from '@mui/material/Box'
import { NAV_ITEMS } from '../../constants/global'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Avatar from '@mui/material/Avatar'

import { HeaderList, HeaderListItem, HeaderListItemLink, HeaderToolbar, BoxWrapper, AppCustomBar } from './styles'

const Header = () => {
  return (
    <AppCustomBar>
      <HeaderToolbar>
        <Box>
          <HeaderList>
            {NAV_ITEMS.map((item, index) => (
              <HeaderListItem key={index}>
                <HeaderListItemLink to={item.link}>{item.title}</HeaderListItemLink>
              </HeaderListItem>
            ))}
          </HeaderList>
        </Box>

        <BoxWrapper>
            <NotificationsNoneIcon />
            <Avatar />
            <div>testtrack@test.ru</div>
        </BoxWrapper>
      </HeaderToolbar>
    </AppCustomBar>
  )
}

export default Header
