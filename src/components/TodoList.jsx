import TodoItem from "./TodoItem";

function TodoList({todos}){
    return (
        <>
            <div>TodoList</div>
            <div>
                {todos.map(todo =>{
                    return <TodoItem key={todo.id} todo={todo}></TodoItem>;
                })}
            </div>
        </>
    );
}

export default TodoList;