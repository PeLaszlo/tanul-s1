import { useContext,useState } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageBrovider({children})
{
    const [language,setLanguage]=useState("hu");
    return( <LanguageContext.Provider value={{language, setLanguage}}>
        {children}
    </LanguageContext.Provider>)
}