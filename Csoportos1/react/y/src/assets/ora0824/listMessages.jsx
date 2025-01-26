import { useState } from "react";
import "./message.css"
function ListMessages({messageList})
{
    const[mesList,setMesList]=useState(messageList);
    
        
    return(
        <div className="message_container">
            {mesList.map((element)=><div key={element.id} className="message">
                <h5>{element.title}</h5>
                <p>{element.body}</p>
            </div>)}
        </div>
    )
}

export default ListMessages