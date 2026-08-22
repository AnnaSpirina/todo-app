import TodoItem from "./TodoItem";

function TodoList({todos, onToggle, onDelete}){
    return (
        <>
            <div>TodoList</div>
            <div>
                {todos.map(todo =>{
                    return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}></TodoItem>;
                })}
            </div>
        </>
    );
}

export default TodoList;