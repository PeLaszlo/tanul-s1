import { useContext, useEffect } from "react"
import { UserData } from "./UserData.jsx"

export default function SetDataName()
{
    const {user,setUser}=useContext(UserData);
    useEffect (()=>setUser({... user,name:"kutya3"}),[]);
    console.log(user);
    return
}
