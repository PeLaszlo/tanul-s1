import { createContext } from "react"
import { useState } from "react"
import { UserData } from "./UserData.jsx";



export default function UserProvider({children})
{
    const [user,setUser]=useState({name:"első", email:"kukac@mail.fg"});
    const [thema,setThema]=useState("");
  ;
      

  return <UserData.Provider value={{ user, setUser,thema,setThema }}>{children}</UserData.Provider>
}