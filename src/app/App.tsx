import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import AppRoutes from './AppRoutes'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout >
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
