const initialState = {
    id: Date.now(),
    text: "",
    completed: false,
    };

const todoItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                id: Date.now(),
                text: action.payload,
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                completed: !state.completed,
            };
        default:
            return state;
    }
}

export default todoItemReducer;