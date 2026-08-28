import Button from "./UI/Button";

function TodoFilter({filter, onFilterChange}){
    return (
        <div>
            <Button onClick={() => onFilterChange("all")}>Все</Button>
            <Button onClick={() => onFilterChange("active")}>Активные</Button>
            <Button onClick={() => onFilterChange("completed")}>Выполненные</Button>
        </div>
    );
}

export default TodoFilter;