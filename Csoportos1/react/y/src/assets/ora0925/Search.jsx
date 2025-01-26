import { useNavigate } from "react-router-dom";
import { TownContext } from "./TownContext";
import { useContext } from "react";


export default function Search()
{
    const key="8f9134b2e24f4f7e974170631242509";
    const{townName} =useContext(TownContext);
    const nav=useNavigate();
    const dayWeather=[];
 async function getweather(town,hour) {
    try{
    const response= await fetch ("http://api.weatherapi.com/v1/forecast.json ?key="+key+"&q="+town+"&lang=hu&hour="+hour+"&days=1");

    const answer=await response.json();
    console.log(answer);
    if (answer.error) throw new Error("Nincs ilyen város");
    dayWeather.push(answer);
    console.log(answer);
    }
    catch (Error){console.log(Error.message);
        alert("Nincs ilyen város!");
    }  
    }
    if (townName) getweather(townName,6);
    else nav("/");

 return (<main>

 </main>)
}