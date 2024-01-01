/* eslint-disable react/prop-types */
import React from "react";

const TodoInput = ({ handleEnterTodo, handleInputChange, value }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        name="todo-input"
        onKeyDown={ handleEnterTodo }
        onChange={handleInputChange}
        value={value}
      ></input>
    </>
  );
};

export default TodoInput;
