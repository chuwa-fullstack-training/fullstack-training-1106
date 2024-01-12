import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, markAllDone, clearCompleted, selectTodos, selectActiveTodosCount } from './todoSlice';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoKeyDown = (event) => {
    if (event.key === 'Enter' && newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };
  console.log('hello');
  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={newTodo}
        onChange={handleNewTodoChange}
        onKeyDown={handleNewTodoKeyDown}
      />
      <div>{activeTodosCount} remaining</div>
      <button onClick={() => dispatch(markAllDone())}>Mark All Done</button>
      <button onClick={() => dispatch(clearCompleted())}>Clear Completed Todos</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(index))}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
