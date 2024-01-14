import "./App.css";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { actions } from "./redux";

export default function App() {
  const todos = useSelector(state => state.todos);
  const remainTasks = useSelector(state => state.remainTasks);

  const [currTaskInput, setCurrTaskInput] = useState("");
  const [markAll, setMarkAll] = useState(false);

  // add task to todos
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      actions.addTodo(currTaskInput);
      setCurrTaskInput("");
    }
  }

  // clear/remove all the completed tasks
  const handleClear = () => {
    actions.clearTodo();
    setMarkAll(false);
  }

  // mark specific task to be completed
  const handleCompleteTask = (id) => {
    actions.changeStatusById(id);
  }

  // mark all task done
  const handleMarkAllTask = () => {
    setMarkAll(true);
    actions.markAllDone();
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
