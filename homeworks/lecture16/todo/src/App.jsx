import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShadowCheckbox from "./ShadowCheckbox";

function App() {
  const [input, setInput] = useState("");
  const [allDoneChecked, setAllDoneChecked] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const incompleteCount = useMemo(() => {
    return todos.reduce((acc, todo) => acc + (todo.complete ? 0 : 1), 0);
  }, [todos]);

  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "ADD", payload: e.target.value });
      setInput("");
    }
  };

  const handleClearTodos = () => {
    dispatch({ type: "CLEAR" });
    setAllDoneChecked(false);
  };

  const handleMarkAllDone = (e) => {
    setAllDoneChecked((prev) => !prev);
    if (e.target.checked) {
      dispatch({ type: "MARK" });
    }
  };

  const handleToggleTodo = (idx) => {
    dispatch({ type: "TOGGLE", payload: idx });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 pt-10">
      <h1 className="text-3xl text-black">Todos-ReactJs</h1>
      <input
        className="w-1/4 p-2 text-black border-2 rounded-md outline-none focus:border-2 focus:shadow-blue focus:border-blue-300"
        placeholder="Type a todo and hit Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTodo}
      />
      <div className="flex flex-row justify-between w-1/4">
        <span className="p-2 text-black">{incompleteCount} remaining</span>
        <button
          className="p-2 text-gray-700 transition-shadow duration-300 ease-in border-2 border-gray-400 rounded-md hover:text-white hover:bg-gray-500 active:shadow-gray"
          onClick={handleClearTodos}
        >
          Clear Completed Todos
        </button>
      </div>
      <ShadowCheckbox onChange={handleMarkAllDone} checked={allDoneChecked}>
        Mark All Done
      </ShadowCheckbox>
      <ul className="w-1/4">
        {todos.map((todo, id) => {
          return (
            <li
              key={id}
              className="p-3 border-b-2 border-x-2 first:border-t-2 first:rounded-t-md last:rounded-b-md"
            >
              <ShadowCheckbox
                checked={todo.complete}
                onChange={() => handleToggleTodo(id)}
              >
                {todo.description}
              </ShadowCheckbox>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
