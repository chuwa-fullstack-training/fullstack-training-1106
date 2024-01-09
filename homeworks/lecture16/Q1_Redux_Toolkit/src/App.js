import React from "react";
import TodoList from "./TodoList";
import { render } from "react-dom";
import { Provider } from "react-redux";
import todoReducer from "./todoSlice";
import { createStore } from "redux";


const store = createStore(todoReducer);

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
