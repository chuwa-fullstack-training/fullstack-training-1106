import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { addTodo, toggleTodo, markAllDone, clearCompleted } from "./todoSlice";

const TodosRTK = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ id: "", text: "", completed: false });
  const [allCompleted, setAllCompleted] = useState(false);
  const dispatch = useDispatch();

  const todoChangeHandler = (e) => {
    setTodo({
      ...todo,
      text: e.target.value,
    });
  };

  const addTodoHandler = () => {
    dispatch(addTodo(todo.text));
    setTodo({
      id: "",
      text: "",
      completed: false,
    });
  };

  const toggleTodoHandler = (todo) => {
    dispatch(toggleTodo(todo));
  };

  const markAllDoneHandler = () => {
    dispatch(markAllDone());
    setAllCompleted(true);
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompleted());
    setAllCompleted(false);
  };

  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
  
    <div className="container w-50">
      <h1>Todos- ReactJs</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodoHandler();
        }}
      >
        <input
          type="text"
          placeholder="Type a todo and hit Enter"
          value={todo.text}
          className="form-control mb-3 mt-4"
          onChange={todoChangeHandler}
        />
      </form>
      <div class="d-flex flex-row justify-content-between">
        <div>{activeTodos} remaining</div>
        <button onClick={clearCompletedHandler}>Clear Completed Todos</button>
      </div>
      <label>
        <input
          type="checkbox"
          checked={allCompleted}
          onChange={markAllDoneHandler}
        />
        Mark All Done
      </label>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                toggleTodoHandler({
                  ...todo,
                  completed: e.target.checked,
                })
              }
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
   
  );
};

export default TodosRTK;
