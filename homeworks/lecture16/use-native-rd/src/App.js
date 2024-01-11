import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './todoReducer';
import TodoList from './TodoList';

const store = createStore(todoReducer);

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
