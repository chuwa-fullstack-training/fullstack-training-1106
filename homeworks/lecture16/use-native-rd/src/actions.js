export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS';

export const addTodo = text => ({
    type: ADD_TODO,
    payload: text
});

export const completeAllTodos = () => ({
    type: COMPLETE_ALL_TODOS
});
