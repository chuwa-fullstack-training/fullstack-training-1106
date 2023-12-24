import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && this.state.newTask.trim() !== '') {
      const newTaskObj = {
        id: Date.now(),
        isComplete: false,
        description: this.state.newTask
      };
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTaskObj],
        newTask: ''
      }));
    }
  };

  toggleTask = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    }));
  };

  toggleAllComplete = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => ({ ...task, isComplete: true }))
    }));
  };

  clearCompleted = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => !task.isComplete)
    }));
  };

  countActiveTasks = () => {
    return this.state.tasks.filter(task => !task.isComplete).length;
  };

  render() {
    return (
      <div className='todo-content'>
        <h2>Todos - ReactJS</h2>
        <input
          placeholder='Type a todo and hit Enter'
          value={this.state.newTask}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
        <p>{this.countActiveTasks()} remaining</p>
        <button onClick={this.clearCompleted}>Clear Completed Todos</button>
        <button onClick={this.toggleAllComplete}>Mark All Done</button>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task.id}>
              <input
                type='checkbox'
                checked={task.isComplete}
                onChange={() => this.toggleTask(task.id)}
              />
              <label>{task.description}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
