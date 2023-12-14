import { Box, Button, Grid, TextField, List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todo');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async () => {
    if (!todo) {
      return;
    }
    try {
      await axios.post('http://localhost:8000/todo', {
        id: Date.now(),
        todo: todo,
        done: false
      });
      setTodo('');
      fetchTodos();
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleCheckboxChange = async (id, checked) => {
    try {
      await axios.patch(`http://localhost:8000/todo/${id}`, {
        done: !checked
      });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo', error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <TextField 
            fullWidth
            variant="filled"
            value={todo}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={handleSubmit}>Add</Button>
        </Grid>
        <Grid item xs={12}>
          <List>
          {todos.map((item) => (
            <ListItem key={item.id} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.done}
                  onChange={() => handleCheckboxChange(item.id, item.done)}
                />
              </ListItemIcon>
              <ListItemText primary={item.todo} />
            </ListItem>
          ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
