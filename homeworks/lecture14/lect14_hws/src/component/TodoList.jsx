import { useEffect } from 'react';
import { useState } from 'react';

import styles from './TodoList.module.css'
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      setTodos(prevTodo => [...prevTodo, { id: Date.now(), text: inputValue, checked: false }]);
      setInputValue("");
      setAllChecked(false);
    }
  };
  const clear = () => {
    setTodos(prevTodo => prevTodo.map(todo => ({ ...todo, checked: false })));
    setAllChecked(false);
  }
  const handleCheckboxChange = (id, e) => {
    e.stopPropagation();
    setTodos(prevTodo => prevTodo.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ))
  }
  useEffect(() => {
    const getUncompleted = getUncompletedTodoCount();
    setAllChecked(todos.length > 0 && getUncompleted === 0);
  }, [todos])
  const markAllCheckbox = () => {
    setTodos(prevTodo => prevTodo.map(todo => ({ ...todo, checked: true })));
    setAllChecked(true);
  }

  const getUncompletedTodoCount = () => {
    return todos.filter(todo => !todo.checked).length;
  }
  const remaining = getUncompletedTodoCount();
  return (
    <div className={styles.hwtodo}>
      <h1 className={styles.title}>Todos - ReactJs</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        className={styles.todoInput}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} />
      <div className={styles.remaining}>
        <span>{remaining} remaining</span>
        <button onClick={clear} className={styles.btn}>Clear Completed Todos</button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={markAllCheckbox}
          />
          Mark All Done
        </label></div>
      <div className={styles.todoContainer}>
        {todos.map((todo, index) =>
        (<div key={todo.id}
          className={`{styles.todoItem} ${index > 0 ? '{styles.with-border}' : ''}`}
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
  )
}
export default TodoList