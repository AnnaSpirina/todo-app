import Button from "./UI/Button";
import "./TodoItem.css"

function TodoItem({todo, onToggle, onDelete}){
    return (
        <div className="todo-item">
            <div>
                <input type="checkbox" className="checkbox-input" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                {todo.text}
            </div>
            <Button className="delete-button" onClick={() => onDelete(todo.id)}>
                ✕
            </Button>
        </div>
    );
}

export default TodoItem;