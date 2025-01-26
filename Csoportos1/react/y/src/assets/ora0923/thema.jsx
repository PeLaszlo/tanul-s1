import { useContext } from "react";
import { UserData } from "./UserData.jsx";
export default function Thema()
{
    const {thema,setThema}=useContext(UserData);
    const changeHandler=(e)=>{
        setThema(e.target.value)
    }
    return (<div style={{backgroundColor:`${thema}`, border:"1px solid black", textAlign:"center"}}>
        <p>Ez a téma területe: </p>
        <select name="thema" id="thema" onChange={changeHandler} defaultValue={"white"}> 
            <option  value="red">piros</option>
            <option value="blue">kék</option>
            <option value="white">fehér</option>
        </select>
    </div>)

}