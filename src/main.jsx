import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DesignSystem from './DesignSystem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DesignSystem />
  </StrictMode>,
)
