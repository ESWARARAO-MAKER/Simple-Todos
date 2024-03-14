// Write your code here
import './index.css'

const TodoItem = props => {
  const {each, onDelete} = props
  const {title, id} = each

  function onBtn() {
    onDelete(id)
  }

  return (
    <li className="todoItem">
      <p> {title} </p>
      <button className="btn" type="button" onClick={onBtn}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
