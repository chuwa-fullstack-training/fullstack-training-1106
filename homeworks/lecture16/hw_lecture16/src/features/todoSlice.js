import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      todo: "job1",
      done: false,
    },
    {
      id: 2,
      todo: "job2",
      done: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    clearTodos: (state, action) => {
      state.todos = state.todos.filter((item) => !item.done);
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    markAllDone: (state, action) => {
      state.todos = state.todos.map((item) => {
        item.done = true;
        return item;
      });
    },
    markOneDone: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
        }
        return item;
      });
    },
  },
});

export const {clearTodos, addTodo, markAllDone, markOneDone} = todoSlice.actions;

export default todoSlice.reducer;