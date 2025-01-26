import {useSearchParams} from "react-router-dom"

export default function SearchParamsDisplay()
{
    const [param,setParam]=useSearchParams();
    const params=[];
    const keys=[];
    param.forEach((value,key)=>{keys.push(key);params.push(value)});

    return (<ul>
       {keys.map((key,index)=><li key={key}>{key} := {params[index]} </li>)}
    </ul>)
} 