import {useState} from "react"
function LongText2({text,number})
{
    const[status,setStatus]= useState(false);
    let actualText;
    let actualBtn;
    let clickFunc;
    if(status) {
        actualText=text;
        actualBtn="show less";
        clickFunc=()=>{setStatus(false)};
    }
    else {
        const arr1=text.split(" ");
        if(number< arr1.length) arr1.length=number;
        actualText=arr1.join(" ");
        actualBtn="read more";
        clickFunc=()=>{setStatus(true)};
    }
    return (<div>
        <p>{actualText}</p>
        <button onClick={clickFunc}> {actualBtn}</button>
        </div>)
}

export default LongText2