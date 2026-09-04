import { useState } from "react";
import Button from "./UI/Button";
import "./TodoForm.css"

function TodoForm({onAdd}){
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="todo-input-wrapper">
                <input
                    type="text"
                    value={input}
                    placeholder="Что нужно сделать?"
                    onChange={(e) => setInput(e.target.value)}
                    className="todo-input"
                    maxLength={50}
                />
                <Button type='submit' className="todo-add-button">
                    Добавить
                </Button>
            </div>
        </form>
    );
}

export default TodoForm;