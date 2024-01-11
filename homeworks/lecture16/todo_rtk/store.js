import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialTodos = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    add: (state, action) => {
      state.push({description: action.payload, complete: false});
    },
    clear: (state) => {
      return state.map((todo) => ({ ...todo, complete: false }));
    },
    mark: (state) => {
      return state.map((todo) => ({ ...todo, complete: true }));
    },
    toggle: (state, action) => {
      state[action.payload] = {
        ...state[action.payload],
        complete: !state[action.payload].complete,
      };
    },
  },
});

export const {add, clear, mark, toggle} = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
