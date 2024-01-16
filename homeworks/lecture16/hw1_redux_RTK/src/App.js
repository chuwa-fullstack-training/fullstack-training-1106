import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearCheckedTodos, checkTodo, checkAllTodos } from './actions';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

function App() {
  const dispatch = useDispatch();
  const { todos, currentId, allChecked, remaining } = useSelector((state) => state);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  };

  const handleClearCheckedTodos = () => {
    dispatch(clearCheckedTodos());
  };

  const handleCheckTodo = (id) => {
    dispatch(checkTodo(id));
  };

  const handleCheckAllTodos = () => {
    dispatch(checkAllTodos());
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <h3>Todos - ReactJs</h3>
        <div>
          <TodoCreate />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '70px' }}>{remaining} remaining</p>
          <button className="clear-button" onClick={handleClearCheckedTodos}>
            Clear Completed Todos
          </button>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={allChecked} onChange={handleCheckAllTodos} />
            Mark All Done
          </label>
        </div>
        <div>
          <TodoList todos={todos} onCheckTodo={handleCheckTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
