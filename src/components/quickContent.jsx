import React,{useState, UseEffect,useContext} from 'react'
import {BsFillRocketTakeoffFill as Technology} from 'react-icons/bs'
import {FaMoneyBillAlt as Finance} from 'react-icons/fa'
import {BsGlobe as SocialMedia} from 'react-icons/bs'
import {BsNewspaper as CurrentAffairs} from 'react-icons/bs'
import {FaFootballBall as Sports} from 'react-icons/fa'
import {FaGamepad as Entertainment} from 'react-icons/fa'
import { PopupContext } from '../context/PopupContext.js'


const QuickButton = (props) => {
    const {popup, setPopup, options, setOptions, quickContentType , setQuickContentType} = useContext(PopupContext)  
    
    return(
        <button className='flex border flex-col md:flex-row rounded-md border-[#7d7d7dcc] justify-center gap-2 bg-[#E0E0E0] text-[#848484d4] duration-200 py-1.5 px-3  hover:text-black focus:text-black hover:bg-[#F0F0F0] focus:bg-[#F0F0F0]'
        onClick={() => (setPopup(true), setOptions("quick"), setQuickContentType(props.title))}
        >
            <div><props.icon fontSize={30} className="" /></div>
            <div className='mt-0.5'>
                <p className=' text-base'>
                    {props.title}
                </p>
            </div>
        </button>
    )
}

export default function quickContent() {
    // const {popup, setPopup, options, setOptions} = useContext(PopupContext)  

  return (
    <div className='mt-5 font-primary'>
        <div>
            <h3 className='text-xl text-black font-primary font-bold'>Get Quick Content On</h3>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-2 w-11/12'>
            <QuickButton title="Technology" icon={Technology}   />
             <QuickButton title="Finance" icon={Finance}   />
             <QuickButton title="Social Media" icon={SocialMedia}   />
            <QuickButton title="Current Affairs" icon={CurrentAffairs}   />
            <QuickButton title="Sports" icon={Sports}   />
            <QuickButton title="Entertainment" icon={Entertainment}   />
        </div>
    </div>
  )
}
