import React, { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [allCompleted, setAllCompleted] = useState(false);

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: true }))
    );
    setAllCompleted((prevAllCompleted) => !prevAllCompleted);
  };

  const clearCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !todo.completed }))
    );
    setAllCompleted((prevAllCompleted) => !prevAllCompleted);
  };

  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <h1>Todos ReactJs</h1>
      <form onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
        <input
          type="text"
          placeholder="Type a todo and hit Enter"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
      <p>{activeTodos} remaining</p>
      <button onClick={clearCompleted}>Clear Completed Todos</button>
      <label>
        <input
          type="checkbox"
          checked={allCompleted}
          onChange={toggleAllDone}
        />
        Mark All Done
      </label>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
