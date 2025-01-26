import { useState } from "react"
import AuthContext from "./AuthContext.js"

function AuthProvider({children})
{
    const [auth,setAuth]=useState(false);
    const toangleAuth=()=>{
        setAuth(!auth);
    }
    
    return <AuthContext.Provider value={{auth,toangleAuth}}>
        {children}
    </AuthContext.Provider>
   
}

export default AuthProvider