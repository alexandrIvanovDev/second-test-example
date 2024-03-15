import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import 'app/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
