import "./App.css";
import React, { useState } from 'react';

export default function App() {
  const [currTaskInput, setCurrTaskInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [remainTasks, setRemainTasks] = useState(0);
  const [markAll, setMarkAll] = useState(false);

  // add task to todos
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      setTodos(prevState => prevState.concat({
        id: todos.length,
        name: currTaskInput,
        done: false,
      }));
      setCurrTaskInput("");
      setRemainTasks(prev => prev+1);
    }
  }

  // clear/remove all the completed tasks
  const handleClear = () => {
    const updatedTodos = [];
    todos.forEach((val) => {
      if (!val.done) {
        updatedTodos.push({ ...val, id: updatedTodos.length });
      }
    });
    setRemainTasks(updatedTodos.length);
    setTodos(updatedTodos);
    setMarkAll(false);
  }

  // mark specific task to be completed
  const handleCompleteTask = (id) => {
    const updatedTodos = todos.map((val, ind) => (
      (ind === id) ? {...val, done: !val.done} : val
    ))

    const newRemainTasks = updatedTodos.reduce((acc, cur) => (
      (!cur.done) ? acc + 1 : acc
   ), 0);
   
   setTodos(updatedTodos);
   setRemainTasks(newRemainTasks);
  }

  // mark all task done
  const handleMarkAllTask = () => {
    setMarkAll(true);
    const updatedTodos = todos.map((val) => ({...val, done: true}));
    setTodos(updatedTodos);
    setRemainTasks(0);
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
