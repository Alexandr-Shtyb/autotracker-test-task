import HomeIcon from '@mui/icons-material/Home'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import FilterListIcon from '@mui/icons-material/FilterList'
import DownloadIcon from '@mui/icons-material/Download'

export const NAV_ITEMS = [
  { title: 'Учетные записи', link: '#' },
  { title: 'Пользователи', link: '#' },
  { title: 'Объекты', link: '#' },
  { title: 'Водители', link: '#' },
  { title: 'Уведомления', link: '#' },
  { title: 'Задания', link: '#' },
]

export const SIDEBAR_ICONS = [
  { icon: <HomeIcon />, endpoint: '/' },
  { icon: <AccountBoxIcon />, endpoint: '/device-list' },
]

export const LABEL_TABS = ['Объекты', 'Группы']

export const ACTIONS_BLOCK_ICONS = [
  { icon: <CalendarViewMonthIcon /> },
  { icon: <FilterListIcon /> },
  { icon: <DownloadIcon /> },
]

export const TABLE_TH_DEVICE_LIST = ['Идентификатор', 'Имя', 'Уникальный номер', 'Статус', 'Последнее обновление']

export const TABLE_TD_DEVICE_LIST = ['id', 'name', 'uniqueId', 'status', 'lastUpdate']

export const API_DEVICES = 'https://gps.autotracker.group/api/devices'

export const TOKEN='RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ'
