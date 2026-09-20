import "./BottomNav.css"

function BottomNav({completedCount, totalCount, onMarkAllComplete, hasCompleted, onClearCompleted}) {
    return (
        <div className="bottom-nav">
            <div className="bottom-nav-item">
                {completedCount < totalCount && (
                    <div onClick={onMarkAllComplete} className="bottom-nav-item-action">
                        <img src='/icons/check_mark.svg' alt="Выполнить все" width={20} height={20}/>
                        Выполнить<br/>все задачи
                    </div>
                )}
            </div>
            <div className="bottom-nav-item">
                <img src="/logo_mini.png" alt="Мой планер" width={50}/>
            </div>
            <div className="bottom-nav-item">
                {hasCompleted && 
                    <div onClick={onClearCompleted} className="bottom-nav-item-action">
                        <img src='/icons/basket.svg' alt="Очистить выполненные" width={20} height={20}/>
                        Очистить<br/>выполненные
                    </div>
                }
            </div>
        </div>

        
        
    );
}

export default BottomNav;