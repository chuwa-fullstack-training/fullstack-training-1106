// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: action.payload.id, text: action.payload.text, completed: false });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        markAllCompleted: state => {
            state.todos.forEach(todo => todo.completed = true);
        },
        clearCompleted: state => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, markAllCompleted, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
