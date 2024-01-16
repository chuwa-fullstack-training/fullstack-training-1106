import { ADD_TODO, CLEAR_CHECKED_TODOS, CHECK_TODO, CHECK_ALL_TODOS } from './actions';

const initialState = {
  todos: [],
  currentId: 0,
  allChecked: false,
  remaining: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo =  { id: state.currentId, title: action.payload.title, checked: false };
      const updatedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: updatedTodos,
        currentId: state.currentId + 1,
        remaining: updatedTodos.filter((todo) => !todo.checked).length,
      };

    case CLEAR_CHECKED_TODOS:
      const filteredTodos = state.todos.filter((todo) => !todo.checked);
      return {
        ...state,
        todos: filteredTodos,
        allChecked: false,
        remaining: filteredTodos.length,
      };

    case CHECK_TODO:
      const updatedCheckedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedCheckedTodos,
        remaining: updatedCheckedTodos.filter((todo) => !todo.checked).length,
      };

    case CHECK_ALL_TODOS:
      const updatedAllCheckedTodos = state.todos.map((todo) => ({
        ...todo,
        checked: !state.allChecked,
      }));
      return {
        ...state,
        todos: updatedAllCheckedTodos,
        allChecked: !state.allChecked,
        remaining: state.allChecked ? state.todos.length : 0,
      };

    default:
      return state;
  }
};

export default rootReducer;
