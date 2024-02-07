import React from 'react'

export default function signup() {
  return (
    <div className="mt-8 font-primary">
    <div>
      <h3 className="text-xl text-black font-primary font-bold">
        Get Personalised Content
      </h3>
      <p className='text-base'>We are enabling <span className='font-logo'>RapidContent</span> to learn from your posts and provide content just like you! <br />
      You will be able to <u> schedule posts </u>, <u>get notifications </u> for posting content, get <u>text & photo content</u> and more!
      <br /> Sign Up for the whitelist today and be the first to hear when we roll out this update.</p>
    </div>
    <div className="flex justify-start">
      <div className="bg-gradient-to-r from-[#08B3E5] to-[#2AF598] text-black hover:font-bold text-lg mt-3  hover:from-[#2AF598] hover:to-[#08B3E5] rounded-md duration-300 p-1">
          <a href="https://bit.ly/RapidContent-Whitelist" target="_blank" rel="noopener noreferrer" className='bg-[#FCFCFC] px-28 py-1.5 rounded'>Sign Up Here ↗</a>
      </div>
    </div>
  </div>
  )
}
