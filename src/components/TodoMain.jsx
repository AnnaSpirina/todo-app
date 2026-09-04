import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoFooter from "./TodoFooter";
import "./TodoMain.css";

function TodoMain({
    onAdd,
    todos,
    totalCount,
    filter,
    onToggle,
    onDelete,
    onFilterChange,
    hasCompleted,
    activeCount,
    onClearCompleted
}){
    return (
        <div className="todo-main">
            <div className="todo-title">
                <h1>Мои задачи</h1>
                <div>{totalCount}</div>
            </div>
            <TodoForm onAdd={onAdd}/>
            <TodoFilter filter={filter} onFilterChange={onFilterChange} className="main-filter"/>
            <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
            <TodoFooter hasCompleted={hasCompleted} activeCount={activeCount} totalTasks={totalCount} onClearCompleted={onClearCompleted}/>
        </div>
    );
}

export default TodoMain;