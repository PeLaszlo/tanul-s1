import { useState,useContext } from "react";
import currancycontex from "./CurencyContex.jsx"
import currencies from "./currancyObject.jsx"

function CurrencyProvider({children})
{
    const [curancy,handleCurrency]=useState(currencies.euro)
    const changeCurrency=(event)=>{ handleCurrency(currencies[event.target.value]);}
    const [filterValue,setFilterValue]=useState("");
    const backFilter=(value)=>{setFilterValue(value);}
    return <currancycontex.Provider value={{curancy, changeCurrency, backFilter,filterValue}}>
        {children}
    </currancycontex.Provider>
}

export default CurrencyProvider