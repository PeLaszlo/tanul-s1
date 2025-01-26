import {useRef,useState,useEffect} from "react"
function TimerControl()
{
    const [count,setCount] = useState(5);
    const timerId = useRef(null);
    const [text, setText]=useState("");

    const handleStrat=() => {
        setCount(5);
        setText("");
        timerId.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
    }
    useEffect(()=>{
        if(count==0){
            clearInterval(timerId.current);
            setText("Időzítő lejárt");
            
        }
    })

    const handleStop = () => {
        clearInterval(timerId.current);
    };

 return( <>
 <h2>{count}</h2>
 <p>{text}</p>
 <button onClick={handleStrat}>start</button>
 <button onClick={handleStop}>stop</button>
 </>)
}
export default TimerControl