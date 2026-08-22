import TodoItem from "./TodoItem";

function TodoList({todos, onToggle}){
    return (
        <>
            <div>TodoList</div>
            <div>
                {todos.map(todo =>{
                    return <TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>;
                })}
            </div>
        </>
    );
}

export default TodoList;