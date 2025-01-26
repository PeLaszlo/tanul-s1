import { LoginContext } from "./LginContext";
import {useState } from "react";

export default function LoginProvider({children})
{
    const [login, setLogin]=useState("");
    const [logform,setLogform]=useState(false)
    return <LoginContext.Provider value={{login,setLogin,logform,setLogform}}>
        {children}
    </LoginContext.Provider>
}