import React, { useState } from "react";
import "./styles.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const markAllCompleted = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }));
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: false }));
    setTodos(updatedTodos);
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
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            {/* <span onClick={() => toggleTodo(index)}>{todo.text}</span> */}
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
