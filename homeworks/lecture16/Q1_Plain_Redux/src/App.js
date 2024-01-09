import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoList from "./TodoList"; 


const initialState = {
  todos: [],
  newTodo: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_TODO":
      return {
        ...state,
        newTodo: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: state.newTodo, completed: false }],
        newTodo: "",
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "MARK_ALL_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: false })),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);


function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
