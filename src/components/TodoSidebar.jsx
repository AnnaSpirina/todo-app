import Button from "./UI/Button";
import "./TodoSidebar.css"
import TodoFilter from "./TodoFilter";

function TodoSidebar({
    filter,
    totalCount,
    activeCount,
    completedCount,
    onFilterChange,
    onMarkAllComplete,
    onClearCompleted,
    hasCompleted
}) {
    return (
        <div className='todo-sidebar'>
            <img src="/logo.png" alt="Мой планер" width={200}/>
            <TodoFilter filter={filter} totalCount={totalCount} activeCount={activeCount} completedCount={completedCount} onFilterChange={onFilterChange} className="sidebar-filter"/>
            <div className="todo-fast-actions">
                <span>Быстрые действия</span>
                {completedCount < totalCount && (
                    <Button onClick={onMarkAllComplete}><img src='/icons/check_mark.svg' width={20} height={20}/>Отметить все как выполненные</Button>
                )}
                {hasCompleted && <Button onClick={onClearCompleted}><img src='/icons/basket.svg' width={20} height={20}/>Очистить выполненные</Button>}
            </div>
            <img className="todo-sidebar-image" src="/images/Мотивация.jpg" alt="Мотивация" />
        </div>
    );
}

export default TodoSidebar;