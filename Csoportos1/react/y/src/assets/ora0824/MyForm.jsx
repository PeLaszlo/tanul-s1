import { useState } from "react";
function MyForm()
{
    const [login,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const [loginText,setLoginInput]=useState("");
    const [passwordText,setPasswordInput]=useState("");

    const send =(event)=>{
        event.preventDefault();
        setLogin(loginText);
        setPassword(passwordText);
    }
    const setLoginText=(event)=>{setLoginInput(event.target.value)}
    const setPasswordText=(event)=>{setPasswordInput(event.target.value)}
    return(
        <form>
            felhasználói név: &nbsp;
            <input name="login" type="text"  onChange={setLoginText} value={loginText}/>
            <br></br>
            <input name="passwors" type="password" onChange={setPasswordText} value={passwordText}/>
            <input type="submit" value="Send" onClick={send}/>
            {login=="" ? "": <h1>Felhasználó név: {login} jelszó: {password}</h1>}
        </form>
    );
}

export default MyForm