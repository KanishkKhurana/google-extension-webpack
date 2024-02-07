import React,{useState, useContext} from 'react'
import {render} from 'react-dom'
import './popup.css'
import Header from './components/header.jsx'
import QuickContent from './components/quickContent.jsx'
import ContentNeeds from './components/contentNeeds.jsx'
import Signup from './components/signup.jsx'
import Logo from './images/logo.svg'
import QuickContentPop from './components/contentPop.jsx'
import { PopupContext } from './context/PopupContext'



function App() {
  const {popup, setPopup, options, setOptions} = useContext(PopupContext)  
    

  return (
    <div className='bg-gradient-to-br from-[#2AF598] to-[#08B3E5]  p-1.5 '>
      <div className='bg-[#FCFCFC] rounded p-5 '>
        <Header />
        <div className='relative'>
        {popup? <QuickContentPop  /> : null}
        <QuickContent  />
        <ContentNeeds  />
        <Signup />

        </div>
      </div>
    </div>
  )
}

export default App
