import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/productcontext.jsx'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(

  <AppProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </AppProvider>
  ,
)
