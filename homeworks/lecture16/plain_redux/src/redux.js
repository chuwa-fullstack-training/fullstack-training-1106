import { createStore, bindActionCreators } from 'redux';

// state
const initialState = {
  todos: [],
  remainTasks: 0,
}

// action
const ADD_TODO = "ADD_TODO";
const CLEAR_TODO = "CLEAR_TODO";
const CHANGE_STATUS_BY_ID = "CHANGE_STATUS_BY_ID";
const MARK_ALL_DONE = "MARK_ALL_DONE";

// add task to todos
function addTodo(currTaskInput) {
  return {
    type: ADD_TODO,
    payload: { currTaskInput: currTaskInput },
  }
}

// clear/remove all the completed tasks
function clearTodo() {
  return {
    type: CLEAR_TODO,
  }
}

// mark specific task to be completed or uncompleted
function changeStatusById(id) {
  return {
    type: CHANGE_STATUS_BY_ID,
    payload: {id: id},
  }
}

// mark all task done
function markAllDone() {
  return {
    type: MARK_ALL_DONE,
  }
}

// reducer
const reducer = (state = initialState, action) => {
  let updatedTodos;
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat({
          id: state.todos.length,
          name: action.payload.currTaskInput,
          done: false,
        }),
        remainTasks: state.remainTasks + 1,
      }

    case CLEAR_TODO:
      updatedTodos = [];
      state.todos.forEach((val) => {
        if (!val.done) {
          updatedTodos.push({ ...val, id: updatedTodos.length });
        }
      });
      return {
        todos: updatedTodos,
        remainTasks: updatedTodos.length,
      }

    case CHANGE_STATUS_BY_ID:
      updatedTodos = state.todos.map((val, ind) => (
        (ind === action.payload.id) ? { ...val, done: !val.done } : val
      ))

      const newRemainTasks = updatedTodos.reduce((acc, cur) => (
        (!cur.done) ? acc + 1 : acc
      ), 0);

      return {
        todos: updatedTodos,
        remainTasks: newRemainTasks,
      }
    case MARK_ALL_DONE:
      updatedTodos = state.todos.map((val) => ({...val, done: true}));
      return {
        todos: updatedTodos,
        remainTasks: 0,
      }

    default:
      return state;
  }
}

// store
const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  console.log("Update state ", store.getState());
});

const actions = bindActionCreators({ addTodo, clearTodo, changeStatusById, markAllDone }, store.dispatch);

export {store, actions};