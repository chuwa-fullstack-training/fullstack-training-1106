import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const TodoList = (props) => {
  const { todos, newTodo, updateNewTodo, addTodo, toggleTodo, markAllCompleted, clearCompleted } = props;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const countActiveTodos = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => updateNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button onClick={markAllCompleted}>Mark All Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      <p className="active-todos">{countActiveTodos()} Active Todos</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    newTodo: state.newTodo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewTodo: (value) => ({ type: "UPDATE_NEW_TODO", payload: value }),
    addTodo: () => ({ type: "ADD_TODO" }),
    toggleTodo: (index) => ({ type: "TOGGLE_TODO", payload: index }),
    markAllCompleted: () => ({ type: "MARK_ALL_COMPLETED" }),
    clearCompleted: () => ({ type: "CLEAR_COMPLETED" }),
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
