// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  let unComplete = todos.reduce(
    (acc, todo) => acc + (todo.completed ? 0 : 1),
    0
  );
  const handleEnterTodo = (event) => {
    if (event.key === "Enter") {
      const todoItem = event.target.value;
      setTodos((prev) => [...prev, { item: todoItem, completed: false }]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleItemChecked = (event) => {
    const idx = +event.target.id;
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[idx].completed = !updatedTodos[idx].completed;
      return updatedTodos;
    });
  };

  const handleClearCompeleted = () => {
    setTodos((prev) => {
        const updatedTodos = [...prev];
        updatedTodos.forEach((todo) => todo.completed = false);
        document.getElementById("all-done").checked = false;
        return updatedTodos;
      });
  };

  const handleAllDone = (event) => {
    if(!event.target.checked) {
        return
    }
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos.forEach((todo) => todo.completed = true);
      return updatedTodos;
    });
  };

  return (
    <div className="todo-container">
      <h1>Todos - ReactJs</h1>
      <TodoInput
        handleEnterTodo={handleEnterTodo}
        handleInputChange={handleInputChange}
        value={inputValue}
      ></TodoInput>
      <div className="remaining-clear-container">
        <span>{unComplete} remaining</span>
        <button onClick={handleClearCompeleted}>Clear Completed Todos</button>
      </div>
      <div className="all-done-container">
        <input type="checkbox" name="all-done" id="all-done"  onChange={handleAllDone}/>
        <label htmlFor="all-done">
          Mark All Done
        </label>
      </div>
      <TodoList todos={todos} handleItemChecked={handleItemChecked}></TodoList>
    </div>
  );
};

export default Todo;
