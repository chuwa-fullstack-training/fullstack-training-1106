import React, { useState } from 'react';
import { Box, Button, Container, Grid, List, TextField, Typography } from '@mui/material';
import ToDoItem from './ToDoItem';

export default function Layout() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [checkedItems, setCheckedItems] = useState({}); // 用于存储所有待办事项的选中状态

    // 处理添加待办事项
    const handleAddTodo = () => {
        setTodos([...todos, todo]);
        setTodo('');
    };

    // 处理重置所有复选框
    const handleReset = () => {
        setCheckedItems({});
    };

    // 处理单个复选框状态改变
    const handleCheckChange = (index, checked) => {
        setCheckedItems({ ...checkedItems, [index]: checked });
    };

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box>
                        <Typography variant="h2" component="h1" align="center">
                            Todo App
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <TextField 
                        label="Add Todo"
                        variant="outlined"
                        fullWidth
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant='contained'
                        onClick={handleAddTodo}
                    >
                        Add
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant='contained'
                        onClick={handleReset}
                    >
                        Reset All
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <Typography variant="h3" component="h2" align="center">
                            Todo List
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <List>
                        {todos.map((todo, index) => (
                            <ToDoItem
                                key={index}
                                todo={todo}
                                checked={checkedItems[index] || false}
                                onCheckChange={(checked) => handleCheckChange(index, checked)}
                            />
                        ))}    
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}
