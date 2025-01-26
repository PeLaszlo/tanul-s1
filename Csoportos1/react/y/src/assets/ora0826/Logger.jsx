import { useEffect } from "react";
function Logger()
{
    useEffect(()=>console.log("Logger betöltődött"),[])
    return
}
export default Logger