import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProviderTask } from './context/TaskContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderTask>
      <App />
    </ProviderTask>
  </React.StrictMode>,
)
