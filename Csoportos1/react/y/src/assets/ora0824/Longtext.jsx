import {useState} from "react"
function LongText({shortText,longText})
{
    const[status,setStatus]= useState(false);
    let actualText;
    let actualBtn;
    let clickFunc;
    if(status) {
        actualText=longText;
        actualBtn="show less";
        clickFunc=()=>{setStatus(false)};
    }
    else {
        actualText=shortText;
        actualBtn="read more";
        clickFunc=()=>{setStatus(true)};
    }
    return (<div>
        <p>{actualText}</p>
        <button onClick={clickFunc}> {actualBtn}</button>
        </div>)
}

export default LongText 