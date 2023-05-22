import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProviderTask } from './context/TaskContext.tsx'
import { ProvideTaskCompleted } from './context/TaskSelected.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderTask>
    <ProvideTaskCompleted>
      <App />
    </ProvideTaskCompleted>
    </ProviderTask>
  </React.StrictMode>,
)
