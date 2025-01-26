import { useContext } from "react";
import { LoginContext } from "./LginContext";
import { useState } from "react";

export default function LoginForm()
{
    
    const {setLogin,setLogform}=useContext(LoginContext);
    const [value,setValue]=useState("");
    const clickHandler=(event)=>{
        event.preventDefault();
        setLogin(value);
        setLogform(false);
    }
    const changeHandler=(event)=>{
        setValue(event.target.value);
        
    }

    return (<form >
        LoginNév: 
        <input type="text" name="Text" value={value} onChange={changeHandler}/> <br />
        <button onClick={clickHandler}>belépés</button>
    </form>)
}