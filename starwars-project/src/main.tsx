import React from 'react'
import ReactDOM from 'react-dom/client'
import CharacterCard from './components/CharacterCard'
import Home from './pages/Home'
import AppRoutes from "./routes/index";

import './styles.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />    
  </React.StrictMode>,
)
