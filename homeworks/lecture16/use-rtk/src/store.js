import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducer
  }
});
