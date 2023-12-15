import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  addTodo = () => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: Date.now(), text: prevState.newTodo, completed: false }],
      newTodo: '',
    }));
  };

  toggleTodo = (id) => {
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return { todos: newTodos };
    });
  };

  markAllCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({ ...todo, completed: true })),
    }));
  };

  clearCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => !todo.completed),
    }));
  };

  render() {
    const { todos, newTodo } = this.state;
    const activeTodos = todos.filter((todo) => !todo.completed).length;
  
    return (
      <div>
        <form onSubmit={(e) => { e.preventDefault(); this.addTodo(); }}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
          />
        </form>
  
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              border: '1px solid #ccc',
              padding: '8px'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => this.toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
  
        <button onClick={this.markAllCompleted}>Mark All Completed</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
  
        <p>{activeTodos} Active Todos</p>
      </div>
    );
  }
}
export default TodoList;  