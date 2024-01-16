export const ADD_TODO = 'ADD_TODO';
export const CLEAR_CHECKED_TODOS = 'CLEAR_CHECKED_TODOS';
export const CHECK_TODO = 'CHECK_TODO';
export const CHECK_ALL_TODOS = 'CHECK_ALL_TODOS';


const addTodo= (title)=>({
   type: ADD_TODO,
   payload: {title},
});

const clearCheckedTodos= ()=>({
    type:CLEAR_CHECKED_TODOS,
});

const checkTodo = (id)=>({
    type: CHECK_TODO,
    payload: {id},

});

const checkAllTodos = () => ({
    type: CHECK_ALL_TODOS,
});

export {
    addTodo,
    clearCheckedTodos,
    checkTodo,
    checkAllTodos
};
