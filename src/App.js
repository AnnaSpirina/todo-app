import React, {useState} from 'react';
import TodoMain from './components/TodoMain';
import TodoSidebar from "./components/TodoSidebar";
import "./App.css"

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
    setTodos(todos => todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  // Удаление задачи
  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  // Добавление задачи
  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    }
    setTodos(todos => [newTodo, ...todos]);
  }

  // Список задач с фильтром
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Количество активных задач
  const activeCount = todos.filter(todo => !todo.completed).length;

  // Удаляем выполненные задачи
  const clearCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.completed));
  }

  // Отмечаем все задачи как выполненные
  const markAllComplete = () => {
    setTodos(todos => todos.map(todo => ({...todo, completed: true})));
  }

  const hasCompleted = todos.some(todo => todo.completed);

  const totalCount = todos.length;

  return (
    <div className='todo-container'>
      <TodoSidebar
        filter={filter}
        totalCount={totalCount}
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        onFilterChange={setFilter}
        onMarkAllComplete={markAllComplete}
        onClearCompleted={clearCompleted}
        hasCompleted={hasCompleted}
      />
      <TodoMain
        onAdd={addTodo}
        todos={filteredTodos}
        totalCount={totalCount}
        filter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onFilterChange={setFilter}
        hasCompleted={hasCompleted}
        activeCount={activeCount}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;