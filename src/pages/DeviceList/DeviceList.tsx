import { useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Tab from '@mui/material/Tab'
import { LABEL_TABS, ACTIONS_BLOCK_ICONS } from '../../constants/global'
import IconButton from '@mui/material/IconButton'
import Select from '../../components/Select/Select'
import DeviceList from '../../components/DeviceList/DeviceList'
import {
  TABLE_TD_DEVICE_LIST,
  TABLE_TH_DEVICE_LIST,
} from '../../constants/global'
import SearchBar from '../../components/SearchBar/SearchBar'
import { ITableData } from './interfaces'

import {
  AppWrapper,
  ActionsTableWrapper,
  SearchAndTabsWrapper,
  CustomTabsBlock,
} from './styles'

const DeviceListPage = () => {
  const [value, setValue] = useState(0)
  const [searchValue, setSearchValue] = useState<string>('')
  const [tableData, setTableData] = useState<ITableData[]>([])
  const [filteredTableData, setFilteredTableData] = useState<ITableData[]>([])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const tabIndexProp = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const handleInput = (value: string) => {
    setSearchValue(value)

    const filteredData = tableData.filter((item) => {
      return String(item.id).includes(value)
    })

    setFilteredTableData(filteredData)
  }

  return (
    <AppWrapper maxWidth={false}>
      <Sidebar />

      <Header />

      <ActionsTableWrapper>
        <SearchAndTabsWrapper>
          <SearchBar value={searchValue} handleInput={handleInput} />

          <CustomTabsBlock
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {LABEL_TABS.map((tab, index) => {
              return <Tab key={index} label={tab} {...tabIndexProp(index)} />
            })}
          </CustomTabsBlock>

          {ACTIONS_BLOCK_ICONS.map((item, index) => {
            return <IconButton key={index}>{item.icon}</IconButton>
          })}
        </SearchAndTabsWrapper>

        <Select />
      </ActionsTableWrapper>

      <DeviceList
        listTH={TABLE_TH_DEVICE_LIST}
        listTD={TABLE_TD_DEVICE_LIST}
        tableData={filteredTableData.length > 0 ? filteredTableData : tableData}
        setTableData={setTableData}
      />
    </AppWrapper>
  )
}

export default DeviceListPage
