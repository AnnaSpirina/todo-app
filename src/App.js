import TodoFilter from "./components/TodoFilter";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <h1>Мой Todo App</h1>
      <TodoFilter />
      <TodoFooter />
      <TodoList />
      <TodoItem />
      <TodoForm />
    </div>
  );
}

export default App;