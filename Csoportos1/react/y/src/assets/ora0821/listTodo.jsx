
import TodoItem from "./todoitem.jsx"
function ListTodo({todos})
{

    return <ul>{todos.map(todo =><TodoItem key={todo.id}todo={todo}  todos={todos}/>)}</ul> 
}
export default ListTodo