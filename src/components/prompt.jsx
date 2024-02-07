import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext.js";
import { TbReload } from "react-icons/tb";
import { Configuration, OpenAIApi } from "openai";
import {Dna} from 'react-loader-spinner'


export default function Prompt() {
  const {
    popup,
    setPopup,
    options,
    setOptions,
    userPrompt,
    setUserPrompt,
    userPromptResponse,
    setUserPromptResponse,
  } = useContext(PopupContext);
  const configuration = new Configuration({
    apiKey: REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateResponse = async () => {
    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: await userPrompt,
        max_tokens: 700,
        temperature: 0,
      })
      .then((response) => {
        setUserPromptResponse(response.data.choices[0].text);
      })
      .catch((error) => {
        window.alert(error);
      });
    //   console.log(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResponse();
  };

  return (
    <div className="my-5 font-primary">
      <div>
        <h1 className="text-xl text-black font-primary font-bold">
          Tell Us Your Content Needs
        </h1>
      </div>
      <div className="mt-3 flex flex-col justify-center">
        <div className="flex gap-3">
          <div className="bg-gradient-to-br to-[#2AF598] rounded-md from-[#08B3E5]  p-[1px] w-full">
            <input
              className="bg-[#FCFCFC] px-16 py-1.5 rounded-md text-center text-base duration-200 flex gap-2 w-full cursor-default "
              placeholder="Enter Your Prompt Here"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-gradient-to-r from-[#08B3E5] to-[#2AF598] text-black font-bold px-1.5 rounded-md  duration-200 hover:-translate-y-2 h-full"
              onClick={(e)=>(setUserPromptResponse(null),handleSubmit(e))}
            >
              <TbReload fontSize={30} />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="bg-gradient-to-r from-[#08B3E5] to-[#2AF598] hover:to-[#08B3E5] hover:from-[#2AF598] text-black font-bold px-24 py-1.5 rounded-md text-base"
            onClick={(e)=>(setUserPromptResponse(null),handleSubmit(e))}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="mt-5 rounded-md ">
        <div>
          {!userPromptResponse ? (
            <div className="flex justify-center">
            <Dna
              visible={true}
              height="180"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            /></div>
          ) : (
            <textarea
              name="textarea"
              id="textarea"
              rows="7.5"
              value={userPromptResponse}
              className=" w-full h-fit rounded-md border border-[#7d7d7dcc] p-3 text-base font-primary"
              onChange={(e) => setUserPromptResponse(e.target.value)}
            />
          )}
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-gradient-to-r from-[#08B3E5] to-[#2AF598] hover:to-[#08B3E5] hover:from-[#2AF598] text-black font-bold px-24 py-1.5 rounded-md text-base" onClick={navigator.clipboard.writeText(userPromptResponse)}>
            COPY TO CLIPBOARD
          </button>          
        </div>
      </div>
      <div className="mt-5">
        <div>
          <h1 className="text-xl text-black font-primary font-bold">
            Suggested Images -{" "}
          </h1>
        </div>
        <div>
          <img src="../images/logo.svg" alt="" />
          Coming Soon!
        </div>
      </div>
    </div>
  );
}
