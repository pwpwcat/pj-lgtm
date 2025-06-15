import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import AppRoutes from './AppRoutes'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout >
      <AppRoutes />
    </Layout>
  </StrictMode>,
)
