import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <Header />
      <main>
        <TodoList title="Walmart" />
        <TodoList title="Harmons" />
        <TodoList title="Smiths" />
      </main>
    </>
  )
}

export default App
