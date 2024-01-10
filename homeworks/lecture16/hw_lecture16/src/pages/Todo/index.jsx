import "./Todo.css";
import {useDispatch, useSelector} from "react-redux";
// import {clearTodos, addTodo, markAllDone, markOneDone} from "../../redux/actions/todos";
import {clearTodos, addTodo, markAllDone, markOneDone} from "../../features/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo({
        id: todos.length + 1,
        todo: e.target.value,
        done: false,
      }))
    }
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  const countRemainingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  const handleMarkAllDone = (e) => {
    if (e.target.checked) {
      dispatch(markAllDone());
    }
  };

  const handleMarkOneDone = (e, id) => {
    dispatch(markOneDone(id))
  };

  return (
    <div className="Todo">
      <h1>Todos - ReactJs</h1>
      <input
        className="inputTodo"
        placeholder="Type a todo and hit Enter"
        onKeyDown={(e) => handleAddTodo(e)}
      ></input>
      <div className="info">
        <p>{countRemainingTodos()} remaining</p>
        <button onClick={handleClearTodos}>Clear Completed Todos</button>
      </div>
      <input
        type="checkbox"
        name="markAll"
        onChange={(e) => handleMarkAllDone(e)}
      ></input>
      <label htmlFor="markAll">Mark All Done</label>
      <ul>
        {todos.map((todo, idx) => (
          <li className="todo" key={idx}>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.done}
              onChange={(e) => handleMarkOneDone(e, todo.id)}
            ></input>
            <label htmlFor={todo.id}>{todo.todo}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}