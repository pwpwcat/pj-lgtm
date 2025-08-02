import { BrowserRouter } from 'react-router'
import RootLayout from '../layout/RootLayout'
import AppRoutes from './AppRoutes'
import './global.sass'

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </BrowserRouter>
  )
}

export default App