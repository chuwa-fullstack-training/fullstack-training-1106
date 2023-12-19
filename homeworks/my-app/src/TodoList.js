
import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: '',
      allDone: false,
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

  toggleAllDone = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({ ...todo, completed: true })),
      allDone: !prevState.allDone,
    }));
  };

  clearCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({ ...todo, completed: !todo.completed })),
      allDone:  !prevState.allDone,
    }));
  };

  render() {
    const { todos, newTodo, allDone} = this.state;
    const activeTodos = todos.filter((todo) => !todo.completed).length;
  
    return (
      <div>
        <div className = "container w-50">
        <h1>Todos- ReactJs</h1>
  
        <form onSubmit={(e) => { e.preventDefault(); this.addTodo(); }}>
          <input
            type='text'
            placeholder='Type a todo and hit Enter'
            value={newTodo}
            className="form-control mb-3 mt-4"
           
            onChange={(e) => this.setState({ newTodo: e.target.value })}
          />
        </form>
     
          <div class = "d-flex flex-row justify-content-between">
   
        <div>{activeTodos} remaining</div>
    
           <button type = "button" class="btn btn-secondary"
           onClick={this.clearCompleted}>Clear Completed Todos</button>
        </div>
          
        <label>   
        <input 
          type = "checkbox"
          checked={allDone}
          onChange={this.toggleAllDone}/>
        Mark All Done
        </label>
        <ul className ="list-group mt-3">
        {todos.map((todo) => (
          <li class="list-group-item"
            key={todo.id}
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
       
  </div>
     
      </div>
    );
  }
}
export default TodoList;  