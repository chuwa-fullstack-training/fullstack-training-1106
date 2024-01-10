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
import TodosRTK from "./TodosRTK";
import userReducer from "./userReducer";
const store = createStore(userReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
 
  
  return (
    <Provider store={store}>
    
      <GithubUser />
    </Provider>
  );
}

export default App;
