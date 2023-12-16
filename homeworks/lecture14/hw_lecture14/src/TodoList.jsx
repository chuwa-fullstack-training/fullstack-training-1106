import { useState } from "react";
import "./TodoList.css";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "job1",
      done: false,
    },
    {
      id: 2,
      todo: "job2",
      done: false,
    },
  ]);

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      const newTodos = [...todos];
      newTodos.push({
        id: newTodos.length + 1,
        todo: e.target.value,
        done: false,
      });
      setTodos(newTodos);
    }
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  const countRemainingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  const handleMarkAllDone = (e) => {
    if (e.target.checked) {
      const nextTodos = todos.map((todo) => {
        todo.done = true;
        return todo;
      });
      setTodos(nextTodos);
    }
  };

  const handleMarkOneDone = (e, id) => {
    const nextTodos = [...todos];
    const todo = nextTodos.find((todo) => todo.id === id);
    todo.done = !todo.done;
    setTodos(nextTodos);
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
