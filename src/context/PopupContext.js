import React, {useState, useEffect} from 'react';
export const PopupContext = React.createContext();

export const PopupProvider = ({children}) => {
    const [popup , setPopup] = useState(false)
    const [options , setOptions] = useState(null)
    const [quickContentType , setQuickContentType] = useState(null)
    const [quickContentTypeResponse , setQuickContentTypeResponse] = useState(undefined)
    const [userPrompt , setUserPrompt] = useState(null)
    const [userPromptResponse , setUserPromptResponse] = useState(undefined)



    return(

        <PopupContext.Provider value={{popup, setPopup, options, setOptions, quickContentType, setQuickContentType, userPrompt , setUserPrompt, quickContentTypeResponse , setQuickContentTypeResponse, userPromptResponse , setUserPromptResponse }}>
            {children}
        </PopupContext.Provider>
    )
}