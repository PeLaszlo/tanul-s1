import {useState} from "react"
const todoList=[
    {id: 1, desription: "csináld meg", isCompleted: false},
    {id: 2, desription: "csináld meg", isCompleted: false},
    {id: 3, desription: "csináld meg", isCompleted: false},
    {id: 4, desription: "csináld meg", isCompleted: false},
    ];
export default function Todos()
{
    const [todos,setTodos]=useState(todoList);
    const [oneItem,setOneItem]=useState(true);
    const completeHandler=(id)=>{let newTodo=todos.map((item)=>item.id==id? {...item,isCompleted:!item.isCompleted} : item );
     setTodos(newTodo);
    };
    let onetodo=todos[0]; 
    const clickHandle=(id)=>{
        setOneItem(!oneItem);
        onetodo= todos.find((todo)=>todo.id==id);
        console.log(onetodo);
    }
    return (<>
    <h1>TODOS</h1>
    {oneItem ?
    todos.map((todo)=><div key={todo.id} >
        <input type="checkbox" checked={todo.isCompleted} onChange={()=>completeHandler(todo.id)}/>
        <span onClick={()=>clickHandle(todo.id)}>{todo.desription}</span>
        <button type="button">Törlés</button>
    </div>)
    :  <div onClick={()=>clickHandle(onetodo.id)}>
        <input type="checkbox" checked={onetodo.isCompleted} onChange={()=>completeHandler(onetodo.id)}/>
        <span>{onetodo.desription}</span>
        <button type="button">Törlés</button> </div>
        }
    </>)
}