import { useState } from "react";
import Card from "./Card.jsx";

export default function Home()
{
    const key="8f9134b2e24f4f7e974170631242509";
    const[text,setText]=useState("");
    const[towns,setTowns]=useState([]);
    const textHandler=(event)=>{setText(event.target.value)}
             
    const addCityHandler=()=>{
       // towns.push(text);
       // setTowns(towns);
       getweather(text);
       
    }
    async function getweather(town) {
        try{
        const response= await fetch ("http://api.weatherapi.com/v1/current.json?key="+key+"&q="+town+"&lang=hu");
        const answer=await response.json();
        if (answer.error) throw new Error("Nincs ilyen város");
        towns.push(answer);
        setTowns(towns);
        console.log(answer);
        }
        catch (Error){console.log(Error.message);
            alert("Nincs ilyen város!");
        }
        finally{ setText("");}
    }

    return (<main style={{width:"100%"}}>
        <div style={{width:"100%"}}>
             <input type="text" value={text} onChange={textHandler} className="addtext"/>
             <button onClick={addCityHandler}>  Add City</button>
        </div>
        <div className="cardContainer">
            {towns.map((town,index)=> <Card key={index} town={town} />)}
        </div>
    </main>)
}