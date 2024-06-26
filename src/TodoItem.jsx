function TodoItem(props) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" />
      {props.title}
    </div>
  )
}

export default TodoItem;
