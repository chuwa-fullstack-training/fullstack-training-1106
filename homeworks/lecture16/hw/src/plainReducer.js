import { createStore } from 'redux';
const initialState = {
    items: [],
    isAllCompleted: false,
    remain: 0
};
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                items: [...state.items, action.payload],
                isAllCompleted: false,
                remain: state.remain + 1
            };
        case 'TOGGLE_TODO':
            const updateItems = state.items.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, checked: !todo.checked }
                }
                return todo;
            });
            const getcompleted = updateItems.filter(todo => todo.checked).length;
            const isAllCompleted = updateItems.length > 0 && getcompleted === updateItems.length;
            const remaining = updateItems.length - getcompleted;
            return {
                ...state,
                items: updateItems,
                isAllCompleted: isAllCompleted,
                remain: remaining
            }
        case 'UNCHECK_ALL':
            return {
                ...state,
                items: state.items.map(todo => ({ ...todo, checked: false })),
                isAllCompleted: false,
                remain: state.items.length
            };
        case 'CHECK_ALL':
            return {
                ...state,
                items: state.items.map(todo => ({ ...todo, checked: true })),
                isAllCompleted: true,
                remain: 0
            };
        default:
            return state;
    }
}

export const addTodo = (todo) => ({ type: "ADD_TODO", payload: todo });
export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", payload: id });
export const uncheckAll = () => ({ type: "UNCHECK_ALL" });
export const checkAll = () => ({ type: "CHECK_ALL" });

export const store = createStore(todosReducer);
