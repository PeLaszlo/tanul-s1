import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import "./style.css";
import Counter from "./counter.jsx";

function TodoApp() {
    const [todos, setTodos] = useState([
        {
            id: "a7e0446b-3a61-4fff-bd4b-20a6be09d159",
            text: "Bevásárolni",
            isDone: true,
        },
        {
            id: "914629db-9610-462b-b87f-241057c59ee1",
            text: "Kitakarítani",
            isDone: false,
        },
        {
            id: "d8230ad5-1057-48ff-94de-0965db534300",
            text: "Kutyát megetetni",
            isDone: true,
        },
    ]);

    const createTodoHandler = (todoText) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text: todoText,
            isDone: false,
        };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    };

    const handleTodoItemChecked = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                const updatedTodo = {
                    ...todo,
                    isDone: !todo.isDone,
                };

                return updatedTodo;
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const deleteTodoItem = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div id="main-container">
            < Counter startValue={10} />
            <TodoForm onTodoCreated={createTodoHandler} />
            <TodoList
                todos={todos}
                handleTodoItemChecked={handleTodoItemChecked}
                deleteTodoItem={deleteTodoItem}
            />
        </div>
    );
}

export default TodoApp;