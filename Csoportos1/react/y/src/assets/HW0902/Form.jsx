import { useState } from "react";
function Form()
{
    const [result,setResult]=useState("");
    const [text,setText]=useState("");
    const changeHandle=(event)=>{setText(event.target.value)}
    const writeHandle=(event)=>{
        event.preventDefault();
        setResult(text);
    }

    return( <form>
        <input type="text" name="first" value={text} onChange={changeHandle}/>
        <input type="submit" name="submit" value="Send"onClick={writeHandle}/>
        <p>{result}</p>
    </form>)
}
export default Form