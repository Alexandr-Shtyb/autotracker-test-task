import NativeSelect from '@mui/material/NativeSelect'

const Select = () => {
  return (
    <NativeSelect
      defaultValue={30}
    >
      <option value={10}>Действие 1</option>
      <option value={20}>Действие 2</option>
      <option value={30}>Действие 3</option>
    </NativeSelect>
  )
}

export default Select
