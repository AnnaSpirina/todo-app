import Button from "./UI/Button";
import "./TodoFilter.css"

function TodoFilter({filter, totalCount, activeCount, completedCount, onFilterChange, className}){
    return (
        <div className={`todo-filter ${className || ""}`}>
            <Button className={`todo-filter-button ${filter === "all" ? "active" : ""}`} onClick={() => onFilterChange("all")}>Все {totalCount !== null && <span>{totalCount}</span>}</Button>
            <Button className={`todo-filter-button ${filter === "active" ? "active" : ""}`} onClick={() => onFilterChange("active")}>Активные {activeCount !== null && <span>{activeCount}</span>}</Button>
            <Button className={`todo-filter-button ${filter === "completed" ? "active" : ""}`} onClick={() => onFilterChange("completed")}>Выполненные {completedCount !== null && <span>{completedCount}</span>}</Button>
        </div>
    );
}

export default TodoFilter;