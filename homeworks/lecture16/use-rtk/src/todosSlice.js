import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    completeAllTodos: state => {
      state.todos.forEach(todo => todo.completed = true);
    }
  }
});

export const { addTodo, toggleTodo, completeAllTodos } = todosSlice.actions;

export default todosSlice.reducer;
