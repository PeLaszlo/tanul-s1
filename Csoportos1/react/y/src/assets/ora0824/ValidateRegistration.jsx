import { useState } from "react";

function ValidateRegistration()
{
    
    const [loginText,setLoginText]=useState("");
    const [passwordText,setPasswordText]=useState("");
    const [comfirmText,setComfirmText]=useState("");
    const [good,setgood]=useState(true);
    const [answer,setAnswer]=useState("");
    const loginChange=(event)=>{setLoginText(event.target.value)}
    const passwordChange=(event)=>{setPasswordText(event.target.value)}
    const comfirmChange=(event)=>{setComfirmText(event.target.value)}
    const send=(event)=>{
        event.preventDefault();
       if(loginText.length>0 && passwordText.length>0)
       {
            if(passwordText==comfirmText)
            {
                setAnswer("Sikeres Regisztáció!");
                setgood(true);
            }
            else
            {
                setAnswer("Jelszó és jelszó megerősítése nem egyezik meg!");
                setgood(false);
            }
        }
        else {
            setAnswer("Minden mezőt ki kell tölteni!");
                setgood(false);
        }
    }
    return(
        <form>
            Felhasználónév:&nbsp;&nbsp;
            <input nam="login" type="text" value={loginText} onChange={loginChange}/>
            <br />
            Jelszó: &nbsp;&nbsp;
            <input name="password" type="password" value={passwordText} onChange={passwordChange} />
            <br />
            Jelszó megerősítése: &nbsp;&nbsp;
            <input name="comfirm" type="password" value={comfirmText} onChange={comfirmChange}/>
            <br />
            <input name="submit" type="submit" value="send 2" onClick={send}/>
            {answer.length>0 ? <p  style={good ? {color:"green"}: {color:"red"}}> {answer}</p>:null}
        </form>
    )
}

export default ValidateRegistration