import React, {useState} from 'react';
import TodoFilter from "./components/TodoFilter";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Сходить на пробежку", completed: false},
    {id: 2, text: "Почитать книгу", completed: false},
    {id: 3, text: "Купить продукты на неделю", completed: false},
    {id: 4, text: "Сходить в кино", completed: false},
    {id: 5, text: "Сделать уборку", completed: true},
    {id: 6, text: "Заказать подарок родителям", completed: true}
  ]);
  const [filter, setFilter] = useState("all");

  // Переключение статуса
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  // Удаление задачи
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    }
    setTodos([newTodo, ...todos]);
  }

  return (
    <div>
      <h1>Мой Todo App</h1>
      <TodoForm onAdd={addTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
      <TodoFilter />
      <TodoFooter />
    </div>
  );
}

export default App;