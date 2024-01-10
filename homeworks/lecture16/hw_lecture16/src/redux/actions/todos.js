export const clearTodos = () => ({
    type: "CLEAR_TODOS",
});

export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
});

export const markAllDone = () => ({
    type: "MARK_ALL_DONE",
});

export const markOneDone = (id) => ({
    type: "MARK_ONE_DONE",
    payload: {
        id: id
    }
});
