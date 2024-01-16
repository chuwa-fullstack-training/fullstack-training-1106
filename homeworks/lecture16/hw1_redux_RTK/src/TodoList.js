import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos);

  const renderedTodos = todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  return (
    <>
      <div style={{ width: '310px' }}>{renderedTodos}</div>
    </>
  );
}

export default TodoList;
