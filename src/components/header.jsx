import React from 'react'
import Logo from '../images/logo.svg'

export default function header() {
  return (
    <div>
        <div>
            <h1 className='font-logo text-4xl text-center'>RapidContent</h1>
        </div>
        <div className='flex gap-3 justify-center mt-3'>
            <hr className='mt-5 w-96 bg-gradient-to-r from-[#08B3E5] to-[#2AF598] p-[1px]' />
            <div className=''><img src={Logo} className="min-w-[50px]" alt="" /></div>
            <hr className='mt-5 w-96 bg-gradient-to-l  from-[#08B3E5] to-[#2AF598] p-[1px]' />
        </div>
    </div>
  )
}
