import { useState } from "react";

function TodoForm({ onTodoCreated }) {
    const [todoInputText, setTodoInputText] = useState("");
    const [error, seterror] = useState("");

    const handleTodoInputChange = (event) => {
        setTodoInputText(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if(todoInputText.length>0) {
            onTodoCreated(todoInputText);
            setTodoInputText("");
            seterror(" ");
        }
        else {seterror("Nincs tartalom!") }
    };

    return (
        <form id="todo" onSubmit={submitHandler}>
            <input
                type="text"
                name="todo-input"
                id="todo-input"
                value={todoInputText}
                onChange={handleTodoInputChange}
            />
            <input type="submit" value="Create" />
            <p style={{color:"red"}}>{error}</p>
        </form>
    );
}

export default TodoForm;