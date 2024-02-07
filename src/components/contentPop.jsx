import React,{useContext, useEffect} from "react";
import Quick from "./quick.jsx";
import Prompt from "./prompt.jsx";
import { PopupContext } from '../context/PopupContext.js'

export default function QuickContentPop() {
const {popup, setPopup, options, setOptions} = useContext(PopupContext)  
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#FCFCFC]">
      <div className="bg-gradient-to-br from-[#2AF598] rounded-md to-[#08B3E5]  p-[1px] w-fit">
        <button className="bg-[#FCFCFC] px-3 py-1 rounded-md hover:font-bold duration-200" onClick={() => setPopup(false)}>
          ← Back
        </button>
      </div>
        {options === "quick" ? <Quick/> : options==="prompt"? <Prompt/> : "third "}
    </div>
  );
}
