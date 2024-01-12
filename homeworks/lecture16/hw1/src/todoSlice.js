import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos[action.payload];
      todo.completed = !todo.completed;
    },
    markAllDone: (state) => {
      state.todos.forEach(todo => todo.completed = true);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    }
  },
});

export const { addTodo, toggleTodo, markAllDone, clearCompleted } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;
export const selectActiveTodosCount = (state) => state.todo.todos.filter(todo => !todo.completed).length;

export default todoSlice.reducer;
