// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
// import App from './App';

// const store = createStore(rootReducer);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//     <Provider store={store}>
//         <App />
//     </Provider>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
