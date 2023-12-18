import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home/Home'
import DeviceListPage from '../../pages/DeviceList/DeviceList'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/device-list" element={<DeviceListPage />} />
    </Routes>
  )
}

export default App
