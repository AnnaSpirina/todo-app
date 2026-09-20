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
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Мой планер" width={200}/>
            <TodoFilter filter={filter} totalCount={totalCount} activeCount={activeCount} completedCount={completedCount} onFilterChange={onFilterChange} className="sidebar-filter"/>
            <div className="todo-fast-actions">
                <span>Быстрые действия</span>
                {completedCount < totalCount && (
                    <Button onClick={onMarkAllComplete}><img src={`${process.env.PUBLIC_URL}/icons/check_mark.svg`} alt="Выполнить все" width={20} height={20}/>Отметить все как выполненные</Button>
                )}
                {hasCompleted && <Button onClick={onClearCompleted}><img src={`${process.env.PUBLIC_URL}/icons/basket.svg`} alt="Очистить все" width={20} height={20}/>Очистить выполненные</Button>}
            </div>
            <img className="todo-sidebar-image" src={`${process.env.PUBLIC_URL}/images/Мотивация.jpg`} alt="Мотивация" />
        </div>
    );
}

export default TodoSidebar;