import "./style.css";
function TodoItem({ text, isDone, onChecked, onDelete }) {
    return (
        <div className={`todo-item ${isDone ? "done" : ""}`}>
            <input type="checkbox" checked={isDone} onChange={onChecked} />
            <p>{text}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default TodoItem;