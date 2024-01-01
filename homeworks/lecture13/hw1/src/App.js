import "./App.css";
import React from "react";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.currId = 0;
      this.state = {
         currTaskInput: "",
         remainTasks: 0,
         todos: [],
         markAllDone: false,
      };
   }

   handleTaskChange = (event) => {
      this.setState({
         currTaskInput: event.target.value,
      });
   };

   handleEnterPress = (event) => {
      if (event.key === "Enter") {
         // add task to todos
         this.setState({
            todos: this.state.todos.concat({
               id: this.currId,
               name: this.state.currTaskInput,
               done: false,
            }),
            remainTasks: this.state.remainTasks + 1,
            currTaskInput: "",
         });
         this.currId++;
      }
   };

   handleMarkTask = (_, id) => {
      // don't need to re-render, directly change state variable
      const updatedTodos = this.state.todos.map((val, ind) => (
         (ind === id) ? { ...val, done: !val.done } : val
      ));

      const newRemainTasks = updatedTodos.reduce((acc, cur) => (
         (!cur.done) ? acc + 1 : acc
      ), 0);

      this.setState({
         todos: updatedTodos,
         remainTasks: newRemainTasks,
      });
   }

   handleMarkAllTask = (_) => {
      const updatedTodos = this.state.todos.map((val, _) => (
         { ...val, done: true }
      ));
      this.setState({
         markAllDone: true,
         todos: updatedTodos,
         remainTasks: 0,
      })
   }

   handleClear = () => {
      let counter = 0;
      const updatedTodos = [];
      this.state.todos.forEach((val, ind) => {
         if (!val.done) {
            updatedTodos.push({
               id: counter,
               name: val.name,
               done: false
            });
            counter++;
         }
      });
      this.currId = counter;
      this.setState({
         todos: updatedTodos,
         markAllDone: false,
      });
   }

   computeRemain = () => {
      return this.state.todos.reduce(
         (acc, curr) => (!curr.done ? acc + 1 : acc),
         0
      );
   };

   render() {
      return (
         <div className="app-div">
            <h1>Todos - ReactJs</h1>

            <div className="input-div">
               <input
                  type="text"
                  name="currTask"
                  value={this.state.currTaskInput}
                  placeholder="Type a todo and hit Enter"
                  onChange={this.handleTaskChange}
                  onKeyDown={this.handleEnterPress}
                  id="task-input"
               />
            </div>

            <div className="info-div">
               <p>{this.state.remainTasks} remaining</p>
               <button id="clear-button" onClick={this.handleClear}>Clear Completed Todos</button>
            </div>

            <div className="mark-all-div">
               <input type="checkbox" name="markAllDone" checked={this.state.markAllDone} onChange={this.handleMarkAllTask} />
               <label for="markAllDone">Mark All Done</label>
            </div>

            <div className="todos-div">
               {this.state.todos.map((task, index) => {
                  return (
                     <div key={task.id} className="todos">
                        <input type="checkbox" name="task" checked={task.done} onChange={event => this.handleMarkTask(event, task.id)} />
                        <label for="task" id="todo-text">
                           {task.name}
                        </label>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default App;
