import { configureStore } from "@reduxjs/toolkit";

const initialTodo = [];

const todoReducer = (state = initialTodo, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { description: action.payload, complete: false }];
    case "CLEAR":
      return state.map((todo) => ({ ...todo, complete: false }));
    case "MARK":
      return state.map((todo) => ({ ...todo, complete: true }));
    case "TOGGLE":
        return state.map((todo, idx) => {
            if(idx === action.payload) {
                todo = {...todo, complete: !todo.complete};
            }
            return todo;
        })
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
