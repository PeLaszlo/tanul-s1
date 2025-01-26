import { useState } from "react"
import { TownContext } from "./TownContext";

export default function TownBrowser({children})
{
const[townName,setTownName]=useState("");
return <TownContext.Provider value={{townName ,setTownName}}>
{children}
</TownContext.Provider>
}