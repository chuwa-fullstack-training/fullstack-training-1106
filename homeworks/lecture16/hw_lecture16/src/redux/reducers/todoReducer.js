const initialState = {
  todos: [
    {
      id: 1,
      todo: "job1",
      done: false,
    },
    {
      id: 2,
      todo: "job2",
      done: false,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CLEAR_TODOS":
      return { ...state, todos: state.todos.filter((item) => (!item.done)) };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "MARK_ALL_DONE":
      return {
        ...state,
        todos: state.todos.map((item) => {
          item.done = true;
          return item;
        }),
      };
    case "MARK_ONE_DONE":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            item.done = !item.done;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
