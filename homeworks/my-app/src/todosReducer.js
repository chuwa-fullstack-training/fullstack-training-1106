const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        ...action.todo,
        id: Date.now(),
      };
      return [...state, newTodo];

    case "TOGGLE_TODO":
      const newTodos = state.map((todo) => {
        const newTodo =
          todo.id === action.todo.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        return newTodo;
      });
      return newTodos;

    case "MARK_ALL_DONE":
      const allDoneTodos = state.map((todo) => ({ ...todo, completed: true }));
      return allDoneTodos;
     

    case "CLEAR_COMPLETED":
      const clearCompletedTodos = state.map((todo) => (
        todo.completed ? { ...todo, completed: false } : todo
      ));
      return clearCompletedTodos;

    default:
      return state;
  }
};

export default todosReducer;
