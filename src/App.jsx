import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:8000/todos");
      const newTodos = await response.json();

      setTodos(newTodos);
    }

    fetchTodos();
  }, []);

  return (
    <>
      <Header />
      <main>
        {todos && todos.map((category, index) => <TodoList key={index} title={category.title} todoItems={category.todos} />)}
      </main>
    </>
  )
}

export default App
