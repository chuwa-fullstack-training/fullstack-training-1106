import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

function TodoCreate() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <div className="todo-input-bar">
      <form onSubmit={handleSubmit}>
        <input placeholder={'Type a todo abd hit Enter'} onChange={handleChange} value={title} style={{ width: '300px' }} />
      </form>
    </div>
  );
}

export default TodoCreate;
