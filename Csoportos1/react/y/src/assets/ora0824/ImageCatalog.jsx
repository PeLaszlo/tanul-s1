import { useState } from "react";
function ImageCatalog({imglist})
{
    const[index,setIndex]=useState(0);
    const changeIndex=(direction)=>{
        let actualIndex=index+direction;
        if (actualIndex<0) actualIndex=imglist.length-1;
        if (actualIndex>imglist.length-1) actualIndex=0;
        setIndex(actualIndex);
    }
    return(
        <>
        <img src={imglist[index]} alt="nincs kép" width="150px"/>
        <button onClick={()=>changeIndex(-1)}>vissza</button>
        <button onClick={()=>changeIndex(1)}>előre</button>
        <p>index {index}</p>
        </>
    )
}
export default ImageCatalog