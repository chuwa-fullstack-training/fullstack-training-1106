import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';


export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        isAllCompleted: false,
        remain: 0
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
            state.isAllCompleted = false;
            state.remain += 1;
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo) {
                todo.checked = !todo.checked;
            }
            const getcompleted = state.items.filter(todo => todo.checked).length;
            if (state.items.length > 0 && getcompleted === state.items.length) {
                state.isAllCompleted = true;
                state.remain = 0;
            }
            else {
                state.remain = state.items.length - getcompleted;
                state.isAllCompleted = false;
            }
        },
        uncheckAll: state => {
            state.items.forEach(todo => {
                todo.checked = false;
            });
            state.isAllCompleted = false;
            state.remain = state.items.length;
        },
        checkAll: state => {
            state.items.forEach(todo => {
                todo.checked = true;
            });
            state.isAllCompleted = true;
            state.remain = 0;
        },
    },
});

export const { addTodo, toggleTodo, uncheckAll, checkAll } = todosSlice.actions;

export default todosSlice.reducer;

export const store = configureStore({
    reducer: todosSlice.reducer
});