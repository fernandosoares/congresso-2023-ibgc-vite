import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/assets/scss/main.scss'
import 'bootstrap/scss/bootstrap.scss'

import { AppContextProvider } from '@/context/AppContextProvider'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
