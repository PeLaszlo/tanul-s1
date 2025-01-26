import { useContext } from "react";
import { UserData } from "./UserData.jsx";
import {useState} from "react";

export default function NewName()
{
    const {user,setUser}=useContext(UserData)
    const [text,setText]=useState("");

    const handleBtn=()=>{
        setUser({...user,name:text});
    }
    const textHandler=(e)=>{setText(e.target.value)}
    return (<div>
        <label htmlFor="name">Név megadása:</label> 
        <input type="text" id="name"value={text} onChange={textHandler}/>
        <button onClick={handleBtn}>Rögzít</button>
    </div>)
}