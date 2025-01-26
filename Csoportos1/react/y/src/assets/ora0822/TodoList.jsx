import TodoItem from "./TodoItem.jsx";

function TodoList({ todos, handleTodoItemChecked, deleteTodoItem }) {
    return (
        <div id="todo-container">
            {todos.map((todo) => {
                const checkHandler = () => handleTodoItemChecked(todo.id);
                const deleteHandler = () => deleteTodoItem(todo.id);

                return (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        isDone={todo.isDone}
                        onChecked={checkHandler}
                        onDelete={deleteHandler}
                    />
                );
            })}
        </div>
    );
}

export default TodoList;