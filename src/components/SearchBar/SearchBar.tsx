import { FC } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { ISearchBarProps } from './interfaces'

import { SearchInput } from './styles'

const SearchBar: FC<ISearchBarProps> = ({ value, handleInput }) => {
  return (
    <SearchInput
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
      placeholder="Поиск"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar
