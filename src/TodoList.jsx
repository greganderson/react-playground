import TodoItem from "./TodoItem";

function TodoList({ title, todoItems }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {todoItems && todoItems.map((item, i) => <TodoItem key={i} todoItem={item} />)}
      </ul>
    </section>
  )
}

export default TodoList;
