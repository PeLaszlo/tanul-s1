import { useState } from "react"
import {useContext } from "react";
import currancycontex from "./CurencyContex.jsx"

function InputField()
{
    const {backFilter}=useContext(currancycontex);
    const [filterText,setFilterText]=useState("");
    const changetext=(event)=>{setFilterText(event.target.value);
        backFilter(event.target.value);
    }
    return <input type="text" name="bookfilter" placeholder="ide írd keresést" value={filterText} onChange={changetext}/>
}
export default InputField