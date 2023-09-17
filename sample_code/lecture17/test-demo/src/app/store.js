import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export function setupStore(preloadedState) {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
    preloadedState
  });
}
