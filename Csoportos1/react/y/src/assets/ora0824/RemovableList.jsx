import { useState } from "react";
function RemovableList({list})
{
    const [actualList,setList]=useState(list);
    const del=(event)=>{
        let id=event.target.id;
        const newList=actualList.filter((item2)=>item2.id!=id);
        setList(newList);
    }
    return(<ul>
        {actualList.map((item)=>
            <li key={item.id}>{item.element}
            <button id={item.id} onClick={del}>delete</button>
            </li>
        )}
    </ul>)
}
 export default RemovableList