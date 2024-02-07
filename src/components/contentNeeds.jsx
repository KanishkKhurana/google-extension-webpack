import React,{useContext} from "react";
import { PopupContext } from '../context/PopupContext'
import { Configuration, OpenAIApi } from "openai";


export default function contentNeeds(props) {

  const configuration = new Configuration({
    apiKey: REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const generateResponse = async () => {
  await openai.createCompletion({
    model: "text-davinci-003",
    prompt: await userPrompt,
    max_tokens: 700,
    temperature: 0,
  }).then((response) => {
    setUserPromptResponse(response.data.choices[0].text);
  }).catch((error) => {
    window.alert(error)
  });
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResponse();
  }

const {popup, setPopup, options, setOptions, userPrompt , setUserPrompt, userPromptResponse , setUserPromptResponse} = useContext(PopupContext)  
  return (
    <div className="mt-8 font-primary">
      <div>
        <h3 className="text-xl text-black font-primary font-bold">
          Tell Us Your Content Needs
        </h3>
      </div>
      <div className="mt-2">
        <input type="text" className="bg-[#E0E0E0] focus:bg-[#F0F0F0] hover:bg-[#F0F0F0] duration-200 w-full text-lg text-center p-2 border rounded-md border-[#7D7D7Dcc]" placeholder="Enter your prompt here" value={userPrompt} onChange={(e)=>(setUserPrompt(e.target.value))}  />
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-r  from-[#08B3E5] to-[#2AF598] text-black font-bold text-lg mt-3 px-24 py-1.5 hover:from-[#2AF598] hover:to-[#08B3E5]  rounded-md duration-500 " onClick={(e)=>(setPopup(true), setOptions("prompt"), handleSubmit(e))}>
            Get Content
        </button>
      </div>
    </div>
  );
}
