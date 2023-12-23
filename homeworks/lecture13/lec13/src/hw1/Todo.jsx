import {useState} from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);

  const toggleAllComplete = (isComplete) => {
    setTasks(tasks.map(task => {
      return {
        ...task,
        isComplete: isComplete
      }
    }));
  }

  const clearAllComplete = () => {
    setTasks([]);
  }

  const countRemainingTasks = () => {
    let count = 0;
    tasks.forEach(task => {
      if (!task.isComplete) count++;
    });
    return count;
  }

  const createNewTask = (e) => {
    // e.preventDefault();
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setTasks([
        ...tasks,
        {id: tasks.length + 1, description: e.target.value, isComplete: false},
      ]);
      e.target.value = '';
    }
  }

  const toggleComplete = (e, id, curIsComplete) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !curIsComplete
        }
      } else {
        return task;
      }
    }));
  }

  return (
    <div className='todo-content'>
      <h2>Todos - ReactJS</h2>
      <input placeholder='Type a todo and hit Enter' onKeyDown={(e) => createNewTask(e)}/>
      <p>{countRemainingTasks()} remaining</p>
      <button onClick={clearAllComplete}>Clear Completed Todos</button>
      <input type='checkbox' onChange={(e) => toggleAllComplete(e.target.checked)} />
      <label>Mark All Done</label>
      <ul>
        {
          tasks.map(task => (
            <li key={task.id}>
              <input type='checkbox' checked={task.isComplete} onChange={(e) => toggleComplete(e, task.id, task.isComplete)}/>
              <label>{task.description}</label>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Todo;