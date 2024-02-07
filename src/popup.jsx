import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import './popup.css'
import App from './App.jsx'
import { PopupProvider } from './context/PopupContext'


function Popup() {

  return (
    <PopupProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode> 
    </PopupProvider>
  )
}


ReactDOM.createRoot(document.getElementById('react-target')).render(<Popup />)
