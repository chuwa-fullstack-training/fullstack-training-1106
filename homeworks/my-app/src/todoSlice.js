import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
        const newTodo = {
            id: Date.now(),
            text: action.payload,
            completed: false
        }
        state.push(newTodo)

        },
        toggleTodo: (state, action) => {
        const newTodos = state.map((todo) => {
            if (todo.id === action.payload.id) {
            return {
                ...todo,
                completed: !todo.completed
            }
            }
            return todo;
        });
        return newTodos;
        },

        markAllDone: (state, action) => {
        const allDoneTodos = state.map((todo) => ({ ...todo, completed: true }));
        return allDoneTodos;
        },

        clearCompleted: (state, action) => {
        const clearCompletedTodos = state.map((todo) => (
            todo.completed ? { ...todo, completed: false } : todo
        ));
        return clearCompletedTodos;
        }

    }
    });

export const { addTodo, toggleTodo, markAllDone, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;