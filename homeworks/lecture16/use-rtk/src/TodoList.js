import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, completeAllTodos } from './todosSlice';
import { TextField, Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';

function TodoList() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleToggle = (index) => {
    dispatch(toggleTodo(index));
  };

  const handleCompleteAll = () => {
    dispatch(completeAllTodos());
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleEnter}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleCompleteAll} style={{ marginTop: '10px' }}>
        Mark All Complete
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index} dense button onClick={() => handleToggle(index)}>
            <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
            <ListItemText primary={todo.text} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
