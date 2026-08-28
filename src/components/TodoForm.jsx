import { useState } from "react";
import Button from "./UI/Button";

function TodoForm({onAdd}){
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                placeholder="Что нужно сделать?"
                onChange={(e) => setInput(e.target.value)}
            />
            <Button type='submit'>Добавить</Button>
        </form>
    );
}

export default TodoForm;