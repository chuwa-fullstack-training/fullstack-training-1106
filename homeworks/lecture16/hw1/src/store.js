import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
