import {useState} from "react";
import {useSearchParams} from "react-router-dom";

export default function SearchQueryInput()
{
    const [inparam,setInparam]=useSearchParams();
    let temp=inparam.get("quary") || "";
    const [value,setValue]=useState(temp);
    const valueHandler=(event)=>{
        setValue(event.target.value);
        inparam.set("quary",event.target.value);
        setInparam(inparam);
    }

    return <input type="text" value={value} onChange={valueHandler}/>
}
