import TodoItem from "./TodoItem";

function TodoList({ title }) {
  const todoItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ];

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {todoItems.map((item, i) => <TodoItem key={i} title={item} />)}
      </ul>
    </section>
  )
}

export default TodoList;
