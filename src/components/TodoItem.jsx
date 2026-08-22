import Button from "./UI/Button";

function TodoItem({todo, onToggle, onDelete}){
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            {todo.text}
            <Button onClick={() => onDelete(todo.id)}>✕</Button>
        </div>
    );
}

export default TodoItem;