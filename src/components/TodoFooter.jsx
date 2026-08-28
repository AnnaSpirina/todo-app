import Button from "./UI/Button";

function TodoFooter({hasCompleted, activeCount, onClearCompleted}){
    return (
        <div>
            <div>Осталось задач: {activeCount}</div>
            {hasCompleted &&
                <Button onClick={() => onClearCompleted()}>Очистить выполненные</Button>
            }
        </div>
    );
}

export default TodoFooter;