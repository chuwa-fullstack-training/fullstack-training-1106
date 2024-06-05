import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; 
import userReducer from './UserSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
        user: userReducer,
        devtools: true,
    },
});

