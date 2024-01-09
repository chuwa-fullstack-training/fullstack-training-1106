import React, { useState, useReducer } from "react";
import "./styles.css";

const initialState = { 
  todos: [], 
  newTodo: "" 
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: state.newTodo, completed: false }],
        newTodo: "",
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) => 
          index === action.payload? { ...todo, completed: !todo.completed } : todo
        )
      };
    case "MARK_ALL_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: false })),
      };
    case "UPDATE_NEW_TODO":
      return { 
        ...state, 
        newTodo: action.payload };
    default:
      return state;
  }
};


const TodoList = () => {
  const[{ todos, newTodo }, dispatch] = useReducer(todoReducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "UPDATE_NEW_TODO", payload: e.target.value});
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO" });
    }
  };

  const toggleTodo = (index) => {
    dispatch({ type: "MARK_ALL_COMPLETED", payload: index });
  };

  const markAllCompleted = () => {
    dispatch({ type: "MARK_ALL_COMPLETED" });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
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
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button onClick={markAllCompleted}>Mark All Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      <p className="active-todos">{countActiveTodos()} Active Todos</p>
    </div>
  );
};

export default TodoList;
