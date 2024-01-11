import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, toggleTodo, uncheckAll, checkAll } from './plainReducer';
import { addTodo, toggleTodo, uncheckAll, checkAll } from './todosSlice';

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const todos = useSelector((state) => state.items);
  const isAllCompleted = useSelector((state) => state.isAllCompleted);
  const remain = useSelector((state) => state.remain);
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo({ id: Date.now(), text: inputValue, checked: false }));
      setInputValue("");
    }
  };
  const handleCheckboxChange = (id, e) => {
    e.stopPropagation();
    dispatch(toggleTodo(id));
  }

  return (
    <div className="hwtodo">
      <h1 className="title">Todos - ReactJs</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        className="todoInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress} />
      <div className="remaining">
        <span>{remain} remaining</span>
        <button onClick={() => dispatch(uncheckAll())} className="btn">Clear Completed Todos</button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isAllCompleted}
            onChange={() => dispatch(checkAll())}
          />
          Mark All Done
        </label></div>
      <div className="todoContainer">

        {todos.map((todo, index) =>
        (<div key={todo.id}
          className={`todoItem ${index > 0 ? 'with-border' : ''}`}
          onClick={(e) => handleCheckboxChange(todo.id, e)}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={(e) => handleCheckboxChange(todo.id, e)}
            onClick={(e) => e.stopPropagation()}
          />
          {todo.text}
        </div>))}
      </div>
    </div>
  );
}

export default App;
