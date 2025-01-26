import { useState } from "react";
import ListTodo from "./listTodo";
function InputTodo()
{
    const [inputValue, setInputValue] = useState("");
    const [todos,setTodo]=useState([]);
    const handleInputValue=(event)=>setInputValue(event.target.value);
    const handleSend=()=>{
       const newtodos=[...todos,{text:inputValue,id:Date.now(),ready:false}];
       setTodo(newtodos);
       setInputValue("");  
    };
    const setReady=(id)=>{
        const newtodos=todos.map((todo)=>{todo.id==id ? todo.ready=!todo.ready : todo.ready; return todo;})
        setTodo(newtodos);
        console.log(newtodos);
   };
   const del=(id)=>{console.log(id,"ee");};
return(
    <div>
        <input type="text" placeholder="ide írd a totdo-t" onChange={handleInputValue} value={inputValue}/>
        <button onClick={handleSend}>Elküld</button>
        <ListTodo todos={todos} />
    </div>
)
}
export default InputTodo
