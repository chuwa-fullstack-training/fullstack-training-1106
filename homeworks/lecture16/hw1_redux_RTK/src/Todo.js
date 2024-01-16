import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTodo } from './actions';

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(checkTodo(todo.id));
  };

  return (
    <div style={{ width: '100%', border: '1px black solid' }}>
      <label>
        <input type="checkbox" checked={todo.checked} onChange={handleChange} />
        {todo.title}
      </label>
    </div>
  );
}

export default Todo;
