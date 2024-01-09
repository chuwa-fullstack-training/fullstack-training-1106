import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    todos: [], 
    newTodo: "" 
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: state.newTodo, completed: false });
      state.newTodo = "";
    },
    updateTodo: (state, action) => {
      state.newTodo = action.payload;
    },
    toggleTodo: (state, action) => {
      state.todos.map((todo, index) => {
        if (index === action.payload) {
          todo.completed = !todo.completed;
        }
      })
    },
    markAllCompleted: (state, action) => {
      state.todos.map((todo) => {
        todo.completed = true;
      });
    },
    clearCompleted: (state, action) => {
      state.todos.map((todo) => {
        todo.completed = false;
      })
    }
  },
});

export const { addTodo, updateTodo, toggleTodo, markAllCompleted, clearCompleted} = todoSlice.actions;

export default todoSlice.reducer;