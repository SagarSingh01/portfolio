import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ThemeChanger } from './Context/Context.js'

createRoot(document.getElementById('root')!).render(
      <StrictMode>
            <ThemeChanger>
                  <App />
            </ThemeChanger>
      </StrictMode>
)
