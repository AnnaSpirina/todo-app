import Button from "./UI/Button";
import "./TodoFooter.css";

function TodoFooter({hasCompleted, activeCount, totalTasks, onClearCompleted}){
    return (
        <div className="todo-footer">
            <div className="todo-footer-tasks">
                <img className="todo-footer-icon" src={`${process.env.PUBLIC_URL}/icons/check_mark.svg`} alt="Оставшиеся задачи" />
                <div className="todo-footer-tasks-text">
                    Осталось задач
                    <div className="todo-footer-tasks-count"><span>{activeCount}</span> из {totalTasks}</div>
                </div>
            </div>
            {hasCompleted && 
                <Button onClick={() => onClearCompleted()} className="clear-completed-button">
                    <img style={{marginTop:"-2px"}} width="24" height="24" src={`${process.env.PUBLIC_URL}/icons/basket.svg`} alt="Очистить" />
                    Очистить выполненные
                </Button>
            }
        </div>
    );
}

export default TodoFooter;