import React, { useState, useReducer } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, addTodo, toggleTodo, markAllCompleted, clearCompleted } from "./todoSlice.jsx";


const TodoList = () => {
  const newTodo = useSelector((state) => state.newTodo);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo());
    }
  };

  const countActiveTodos = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => dispatch(updateTodo(e.target.value))}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => dispatch(addTodo())}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(index))}
            />
            <span onClick={() => dispatch(toggleTodo(index))}>{todo.text}</span>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button onClick={() => dispatch(markAllCompleted())}>Mark All Completed</button>
        <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
      </div>
      <p className="active-todos">{countActiveTodos()} Active Todos</p>
    </div>
  );
};

export default TodoList;
