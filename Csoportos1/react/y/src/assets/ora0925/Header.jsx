import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TownContext } from "./TownContext";
import { useContext } from "react";


export default function Header()
{
    const navigate=useNavigate();
    const {setTownName}=useContext(TownContext);
    const [text,setText]=useState("");
   const textHandler=(event)=>{setText(event.target.value);}
   const btnSearch=()=>{
        setTownName(text);
        setText("");
        navigate("./search");
   }
   
   return <nav className="headernav">
        <a href="./" className="hederelement">Home</a>
        <a href="./about" className="hederelement">About</a>
        
        <input type="text" name="search" value={text} onChange={textHandler}  style={{height:"32px", fontSize:"large"}}/>
        <button onClick={btnSearch} className="search-btn">Search</button>
       
    </nav>
}