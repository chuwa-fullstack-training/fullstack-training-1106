import { ADD_TODO, CLEAR_CHECKED_TODOS, CHECK_TODO, CHECK_ALL_TODOS } from './actions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  currentId: 0,
  allChecked: false,
  remaining: 0,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    [ADD_TODO]: (state, action) => {
      const newTodo = { id: state.currentId, title: action.payload.title, checked: false };
      state.todos.push(newTodo);
      state.currentId += 1;
      state.remaining = state.todos.filter((todo) => !todo.checked).length;
    },
    [CLEAR_CHECKED_TODOS]: (state) => {
      state.todos = state.todos.filter((todo) => !todo.checked);
      state.allChecked = false;
      state.remaining = state.todos.length;
    },
    [CHECK_TODO]: (state, action) => {
      state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, checked: !todo.checked } : todo));
      state.remaining = state.todos.filter((todo) => !todo.checked).length;
    },
    [CHECK_ALL_TODOS]: (state) => {
      state.todos = state.todos.map((todo) => ({ ...todo, checked: !state.allChecked }));
      state.allChecked = !state.allChecked;
      state.remaining = state.allChecked ? 0 : state.todos.length;
    },
  },
});

export const { addTodo, clearCheckedTodos, checkTodo, checkAllTodos } = todosSlice.actions;
export default todosSlice.reducer;
