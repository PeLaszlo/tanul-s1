import "./todo.css";
import { useState } from "react";
function TodoItem({ todo,todos2}) {
    const [todos,setTodo]=useState([]);
    const check=todo.ready? "checked":"";
    let itemcolor=todo.ready ? "green":"dark";
    const readych=(id)=>{ 
        const newtodos=todos.map((todo)=>{todo.id==id ? todo.ready=!todo.ready : todo.ready; return todo;})
        setTodo(newtodos);
    }
    const del=(id)=>{};
    
    return (
        <li className={itemcolor}>
               <input type="checkbox" check={check} onClick={readych(todo.id)}/>
                {todo.text}
            
            <button className="delete-btn" >Törlés</button>
        </li>
    );
}

export default TodoItem;