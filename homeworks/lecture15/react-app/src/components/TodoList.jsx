/* eslint-disable react/prop-types */
import React from "react";

const TodoList = ({ todos, handleItemChecked }) => {
  return (
    <>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={idx}>
              <input
                type="checkbox"
                name="todo-comlete"
                id={idx}
                onChange={handleItemChecked}
                checked={todo.completed}
              />
              <span>{todo.item}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
