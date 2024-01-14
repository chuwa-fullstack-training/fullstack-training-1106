import "./App.css";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, clear, changeStatusById, markAllDone } from "./features/todoSlice";


export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const remainTasks = useSelector(state => state.todo.remainTasks);

  const [currTaskInput, setCurrTaskInput] = useState("");
  const [markAll, setMarkAll] = useState(false);

  // add task to todos
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      dispatch(add(currTaskInput));
      setCurrTaskInput("");
    }
  }

  // clear/remove all the completed tasks
  const handleClear = () => {
    dispatch(clear());
    setMarkAll(false);
  }

  // mark specific task to be completed
  const handleCompleteTask = (id) => {
    dispatch(changeStatusById(id));
  }

  // mark all task done
  const handleMarkAllTask = () => {
    setMarkAll(true);
    dispatch(markAllDone());
  }

  return (
    <div className="app-div">
      <h1>Todos - ReactJs</h1>

      <div className="input-div">
        <input
          type="text"
          name="currTask"
          value={currTaskInput}
          placeholder="Type a todo and hit Enter"
          onChange={(e) => setCurrTaskInput(e.target.value)}
          onKeyDown={handleEnterPress}
          id="task-input"
        />
      </div>

      <div className="info-div">
        <p>{remainTasks} remaining</p>
        <button id="clear-button" onClick={handleClear}>Clear Completed Todos</button>
      </div>

      <div className="mark-all-div">
        <input type="checkbox" name="markAllDone" checked={markAll} onChange={handleMarkAllTask} />
        <label for="markAllDone">Mark All Done</label>
      </div>

      <div className="todos-div">
        {todos.map((task, index) => {
          return (
            <div key={task.id} className="todos">
              <input type="checkbox" name="task" checked={task.done} onChange={_ => handleCompleteTask(task.id)} />
              <label for="task" id="todo-text">
                {task.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
