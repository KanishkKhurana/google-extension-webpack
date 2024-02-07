import React, { useContext, useEffect } from "react";
import { PopupContext } from "../context/PopupContext.js";
import {BsFillRocketTakeoffFill as Technology} from 'react-icons/bs'
import {FaMoneyBillAlt as Finance} from 'react-icons/fa'
import {BsGlobe as SocialMedia} from 'react-icons/bs'
import {BsNewspaper as CurrentAffairs} from 'react-icons/bs'
import {FaFootballBall as Sports} from 'react-icons/fa'
import {FaGamepad as Entertainment} from 'react-icons/fa'
import {TbReload} from 'react-icons/tb'
import {AiOutlineCopy} from 'react-icons/ai'
import { Configuration, OpenAIApi } from "openai";
import {Dna} from 'react-loader-spinner'



export default function Quick() {
  const {
    popup,
    setPopup,
    options,
    setOptions,
    quickContentType,
    setQuickContentType,
    quickContentTypeResponse , setQuickContentTypeResponse
  } = useContext(PopupContext);

  const configuration = new Configuration({
    apiKey: REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const generateResponse = async () => {
  await openai.createCompletion({
    model: "text-davinci-003",
    prompt:  "generate some quick content on "+quickContentType+" that includes researched information and good thoughts.",
    max_tokens: 150,
    temperature: 0,
  }).then((response) => {
    setQuickContentTypeResponse(response.data.choices[0].text);
    
  }).catch((error) => {
    window.alert(error)
  });
//   console.log(response);
  }

  useEffect(() => {
    generateResponse();
  }, [])
 


  const Icon = quickContentType === "Technology" ? Technology : quickContentType === "Finance" ? Finance : quickContentType === "Social Media" ? SocialMedia : quickContentType === "Current Affairs" ? CurrentAffairs : quickContentType === "Sports" ? Sports : quickContentType === "Entertainment" ? Entertainment : null;

  return (
    <div className="my-5 font-primary">
      <div>
        <h1 className='text-xl text-black font-primary font-bold'>Getting Quick Content On -</h1>
      </div>
      <div className="mt-3 flex justify-between">
        <div className="bg-gradient-to-br to-[#2AF598] rounded-md from-[#08B3E5]  p-[1px] w-fit">
          <button className="bg-[#FCFCFC] px-16 py-1.5 rounded-md text-base duration-200 flex gap-2 cursor-default "><Icon className="mt-0.5" fontSize={25} /><div className="mt-0.5">{quickContentType}</div></button>
        </div>
        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-[#08B3E5] to-[#2AF598] text-black font-bold px-1.5 rounded-md  duration-200 hover:-translate-y-2" onClick={(e)=> (e.preventDefault(),setQuickContentTypeResponse(null) ,generateResponse())}><TbReload  fontSize={30} /></button>
          <button className="bg-gradient-to-r from-[#08B3E5] to-[#2AF598] text-black font-bold px-1.5 rounded-md  duration-200 hover:-translate-y-2" onClick={(e) => {navigator.clipboard.writeText(quickContentTypeResponse)}}><AiOutlineCopy  fontSize={30} /></button>
        </div>
      </div>
      <div className="mt-2 mx-2  rounded-md ">
        {!quickContentTypeResponse ? <div className="flex justify-center"><Dna
        visible={true}
        height="180"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        /> </div>: <textarea
          name="textarea"
          id="textarea"
          rows="7.5"
          value = {quickContentTypeResponse}
          className=" w-full h-fit rounded-md border border-[#7d7d7dcc] p-3 text-base font-primary"
          onChange={(e) => setQuickContentTypeResponse(e.target.value)}
        />}
      </div>
      <div className="mt-5">
        <div>
          <h1 className="text-xl text-black font-primary font-bold">Suggested Images - </h1>
        </div>
        <div>
          <img src="../images/logo.svg" alt="" />
          Coming Soon!
        </div>
      </div>
    </div>
  );
}
