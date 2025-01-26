import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";
import { LoginContext } from "./LginContext";
import { useState } from "react";
import  LoginForm from "./LoginForm.jsx"

export default function Header()
{
    const{language,setLanguage}=useContext(LanguageContext);
    const{login,setLogin,logform,setLogform}=useContext(LoginContext);
    
    const changeHandler=(event)=>{
        setLanguage(event.target.value);
    }

    let welcome="üdvözlet ";
    switch (language) {
        case "hu":{ welcome="Üdvözlet "; break;}
        case "en":{ welcome="Welcome "; break;}
        case "ge":{ welcome="Willkommen "; break;}
    }
    let btnText;
    if(login) {
        welcome+=login; 
        btnText="Kijelentkezés";
    }
    else btnText="Bejelentkezés";
    
    const btnClickHandler=()=>{
        if(login) {setLogin("");}
        else {setLogform(true)}
    }
    
    return (<header >
        <h1>{welcome}</h1>
        <span>Nyelv: {language}</span>
        <select name="language" id="lang" onChange={changeHandler}>
            <option value="hu">Magyar</option>
            <option value="en">English</option>
            <option value="ge">Dutsch</option>
        </select> <br />
        <button onClick={btnClickHandler}> {btnText}</button>

        {logform && <LoginForm/>}
        
    </header>)
}