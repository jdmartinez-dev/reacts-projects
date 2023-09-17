import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode (No funciona en produccion)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
