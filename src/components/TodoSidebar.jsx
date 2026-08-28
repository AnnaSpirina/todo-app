import Button from "./UI/Button";

function TodoSidebar({
    totalCount,
    activeCount,
    completedCount,
    filter,
    onFilterChange,
    onMarkAllComplete,
    onClearCompleted,
    hasCompleted
}) {
    return (
        <div>
            <img src="/logo.png" alt="Мой планер" width={200}/>
            <Button onClick={() => onFilterChange("all")}>Все ({totalCount})</Button>
            <Button onClick={() => onFilterChange("active")}>Активные ({activeCount})</Button>
            <Button onClick={() => onFilterChange("completed")}>Выполненные ({completedCount})</Button>
            <div>
                Быстрые действия:
                <button onClick={onMarkAllComplete}>Отметить все как выполненные</button>
                {hasCompleted && <button onClick={onClearCompleted}>Очистить выполненные</button>}
            </div>
            <div>
                Слоган: Порядок в задачах — порядок в голове!
            </div>
        </div>
    );
}

export default TodoSidebar;