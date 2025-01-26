import { useState } from "react";
import "./message.css"
function ListMessages2()
{
    const[mesList,setMesList]=useState([]);
   const load=()=>{
        fetch( "https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((list)=>setMesList(list));
        
   }
        
    return(
        <>
        <h2>File-ból olvasva</h2>
        {mesList.length>0 ?
        <div className="message_container">
            {mesList.map((element)=><div key={element.id} className="message">
                <h5>{element.title}</h5>
                <p>{element.body}</p>
            </div>)}
        </div> :<button onClick={load}>betöltés</button>}
        </>)
}

export default ListMessages2