function TodoItem({todo, onToggle}){
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            {todo.text}
        </div>
    );
}

export default TodoItem;