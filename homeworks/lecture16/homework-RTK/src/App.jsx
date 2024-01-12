import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, clearCompleted, markAllDone } from "./todosSlice";

export default function App() {
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const activeTodos = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todos - ReactJs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </form>
      <div >
        <p>{activeTodos} remaining</p>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>

      <label>
        <input
          type="checkbox"
          onClick={() => dispatch(markAllDone())}
          checked={todos.length > 0 && todos.every((todo) => todo.isCompleted)}
        />
        Mark All Done
      </label>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <label htmlFor={`todo-${index}`}>
              <input
                type="checkbox"
                id={`todo-${index}`}
                checked={todo.isCompleted}
                onChange={() => dispatch(toggleTodo(index))}
              />
              <span>{todo.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
