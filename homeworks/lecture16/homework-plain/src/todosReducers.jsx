// Action Types
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";
const MARK_ALL_DONE = "MARK_ALL_DONE";

// Action Creators
export const addTodo = (text) => ({ type: ADD_TODO, text });
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const markAllDone = () => ({ type: MARK_ALL_DONE });

// Initial State
const initialState = [];

// Reducer
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, isCompleted: false }];
    case TOGGLE_TODO:
      return state.map((todo, i) =>
        i === action.index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.isCompleted);
    case MARK_ALL_DONE:
      const areAnyTodosIncomplete = state.some((todo) => !todo.isCompleted);
      return state.map((todo) => ({
        ...todo,
        isCompleted: areAnyTodosIncomplete,
      }));
    default:
      return state;
  }
};
