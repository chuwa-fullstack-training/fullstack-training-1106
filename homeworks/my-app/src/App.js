import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Converter from "./Converter";
import Layout from "./Layout";
import TodoList from "./TodoList";
import Todos from "./Todos";
import PhoneScreen from "./PhoneScreen";
import Github from "./Github";
import "bootstrap/dist/css/bootstrap.min.css";
import Color from "./Color";
import GithubUser from "./GithubUser";
import ColorRouter from "./ColorRouter";
import TodosRedux from "./TodosRedux";
import { Provider } from "react-redux";
import {createStore} from "redux";
import todosReducer from "./todosReducer";

const store = createStore(todosReducer);


function App() {
 
 
  return (
    <Provider store={store}>
      {/* <Layout/> */}
      {/* <Counter/>
    <Converter/> */}
      {/* <PhoneScreen/> */}
      <TodosRedux/>
    </Provider>
  );
}

export default App;
