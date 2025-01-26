import {useContext } from "react";
import currencies from "./currancyObject.jsx";
import currancycontex from "./CurencyContex.jsx"

function CurrentChange()
{
    const {changeCurrency}=useContext(currancycontex);

    const changeSelect=(event)=>{changeCurrency(event)}

    return (<select name="currency" id="currency" onChange={changeSelect}>
        {Object.keys(currencies).map((item)=><option value={item} 
         key={item}>{currencies[item].label}</option>)}   
       
    </select>)
}

export default CurrentChange