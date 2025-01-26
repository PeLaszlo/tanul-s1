import { useState } from "react";
function Counter({startValue})
{
    const [value, setValue] = useState(startValue);
    const increment=()=>{const newValue=value+1; setValue(newValue)};
    const decrement=()=>{const newValue=value-1; setValue(newValue)};
    const reset=()=> {setValue(startValue);};
    return(<div>
        <p style={{textAlign:"center", border:"1px solid brown"}}>{value}</p>
        <button onClick={increment}>Növelés</button>
        <button onClick={decrement}>csökkentés</button>
        <button onClick={reset}>Reset</button>
    </div>)
}
export default Counter