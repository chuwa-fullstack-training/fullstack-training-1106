import { createSlice } from "@reduxjs/toolkit";

// define state
const initialState = {
  todos: [],
  remainTasks: 0,
}

// action and reducer using createSlice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos = state.todos.concat({
        id: state.todos.length,
        name: action.payload,
        done: false,
      });
      state.remainTasks++;
    },
    clear: (state) => {
      const updatedTodos = [];
      state.todos.forEach((val) => {
        if (!val.done) {
          updatedTodos.push({ ...val, id: updatedTodos.length });
        }
      });
      state.todos = [...updatedTodos];
      state.remainTasks = updatedTodos.length;
    },
    changeStatusById: (state, action) => {
      const updatedTodos = state.todos.map((val, ind) => (
        (ind === action.payload) ? { ...val, done: !val.done } : val
      ));

      state.todos = [...updatedTodos];
      state.remainTasks = updatedTodos.reduce((acc, cur) => (
        (!cur.done) ? acc + 1 : acc
      ), 0);
    },
    markAllDone: (state, action) => {
      state.todos = state.todos.map((val) => ({ ...val, done: true }));
      state.remainTasks = 0;
    }
  }
});

export default todoSlice.reducer;
export const { add, clear, changeStatusById, markAllDone } = todoSlice.actions;