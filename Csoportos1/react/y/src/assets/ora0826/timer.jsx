import { useEffect,useState } from "react"
function Timer()
{
    let newcount=0;
    const [count,setCount]=useState(0);
    const time=() =>{newcount=count+1;setCount(newcount);}
    useEffect(()=>{ setInterval(time,1000);
        return ()=>clearInterval(time);
    },[count]);

    return(
        <h2>{count}</h2>
    )
}
export default Timer