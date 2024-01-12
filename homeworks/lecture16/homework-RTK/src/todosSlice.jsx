import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, isCompleted: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    clearCompleted: (state) => {
      return state.filter((todo) => !todo.isCompleted);
    },
    markAllDone: (state) => {
      const areAnyTodosIncomplete = state.some((todo) => !todo.isCompleted);
      state.forEach((todo) => {
        todo.isCompleted = areAnyTodosIncomplete;
      });
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted, markAllDone } =
  todosSlice.actions;
export default todosSlice.reducer;
