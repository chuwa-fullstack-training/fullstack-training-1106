// export const ADD_TODO = 'ADD_TODO';
// export const CLEAR_CHECKED_TODOS = 'CLEAR_CHECKED_TODOS';
// export const CHECK_TODO = 'CHECK_TODO';
// export const CHECK_ALL_TODOS = 'CHECK_ALL_TODOS';


// const addTodo= (title)=>({
//    type: ADD_TODO,
//    payload: {title},
// });

// const clearCheckedTodos= ()=>({
//     type:CLEAR_CHECKED_TODOS,
// });

// const checkTodo = (id)=>({
//     type: CHECK_TODO,
//     payload: {id},

// });

// const checkAllTodos = () => ({
//     type: CHECK_ALL_TODOS,
// });

// export {
//     addTodo,
//     clearCheckedTodos,
//     checkTodo,
//     checkAllTodos
// };
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    currentId: 0,
    allChecked: false,
    remaining: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: state.currentId, title: action.payload.title, checked: false };
      state.todos.push(newTodo);
      state.currentId += 1;
      state.remaining = state.todos.filter((todo) => !todo.checked).length;
    },
    clearCheckedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.checked);
      state.allChecked = false;
      state.remaining = state.todos.length;
    },
    checkTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      state.remaining = state.todos.filter((todo) => !todo.checked).length;
    },
    checkAllTodos: (state) => {
      state.todos = state.todos.map((todo) => ({ ...todo, checked: !state.allChecked }));
      state.allChecked = !state.allChecked;
      state.remaining = state.allChecked ? 0 : state.todos.length;
    },
  },
});

export const { addTodo, clearCheckedTodos, checkTodo, checkAllTodos } = todoSlice.actions;
export default todoSlice.reducer;
