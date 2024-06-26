function TodoItem({ todoItem }) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" />
      {todoItem.title}
    </div>
  )
}

export default TodoItem;
