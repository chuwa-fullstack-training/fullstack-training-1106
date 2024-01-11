const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS';

export const addTodo = text => ({
    type: ADD_TODO,
    payload: text
});

export const toggleTodo = index => ({
    type: TOGGLE_TODO,
    payload: index
});

export const completeAllTodos = () => ({
    type: COMPLETE_ALL_TODOS
});

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, completed: false }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                    index === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case COMPLETE_ALL_TODOS:
            return {
                ...state,
                todos: state.todos.map(todo => ({ ...todo, completed: true }))
            };
        default:
            return state;
    }
};

export default todoReducer;
