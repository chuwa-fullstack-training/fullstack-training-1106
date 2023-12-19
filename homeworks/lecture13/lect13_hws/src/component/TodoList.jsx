// import { useEffect } from 'react';
// import { useState } from 'react';
// import '../App.css'


// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [allChecked, setAllChecked] = useState(false);
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const handleKeyPress = (e) => {
//     if (e.key == "Enter") {
//       setTodos(prevTodo => [...prevTodo, { id: Date.now(), text: inputValue, checked: false }]);
//       setInputValue("");
//       setAllChecked(false);
//     }
//   };
//   const clear = () => {
//     setTodos(prevTodo => prevTodo.map(todo => ({ ...todo, checked: false })));
//     setAllChecked(false);
//   }
//   const handleCheckboxChange = (id, e) => {
//     e.stopPropagation();
//     setTodos(prevTodo => prevTodo.map(todo =>
//       todo.id === id ? { ...todo, checked: !todo.checked } : todo
//     ))
//   }
//   useEffect(() => {
//     const getUncompleted = getUncompletedTodoCount();
//     setAllChecked(todos.length > 0 && getUncompleted === 0);
//   }, [todos])
//   const markAllCheckbox = () => {
//     setTodos(prevTodo => prevTodo.map(todo => ({ ...todo, checked: true })));
//     setAllChecked(true);
//   }

//   const getUncompletedTodoCount = () => {
//     return todos.filter(todo => !todo.checked).length;
//   }
//   const remaining = getUncompletedTodoCount();
//   return (
//     <div className="hwtodo">
//       <h1 className="title">Todos - ReactJs</h1>
//       <input
//         type="text"
//         placeholder="Type a todo and hit Enter"
//         className="todoInput"
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyPress} />
//       <div className="remaining">
//         <span>{remaining} remaining</span>
//         <button onClick={clear} className="btn">Clear Completed Todos</button>
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={allChecked}
//             onChange={markAllCheckbox}
//           />
//           Mark All Done
//         </label></div>
//       <div className='todoContainer'>
//         {todos.map((todo, index) =>
//         (<div key={todo.id}
//           className={`todoItem ${index > 0 ? 'with-border' : ''}`}
//           onClick={(e) => handleCheckboxChange(todo.id, e)}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.checked}
//               onChange={(e) => handleCheckboxChange(todo.id, e)}
//               onClick={(e) => e.stopPropagation()}
//             />
//             {todo.text}
//           </label>
//         </div>))}
//       </div>
//     </div>
//   )
// }
// export default TodoList


import { Component } from 'react';
import '../App.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
      allChecked: false
    }
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleKeyPress = (e) => {
    if (e.key == "Enter") {
      this.setState(prevState => ({
        todos: [...prevState.todos, { id: Date.now(), text: this.state.inputValue, checked: false }],
        inputValue: "",
        allChecked: false
      }))
    }
  }
  clear = () => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => ({ ...todo, checked: false })
      ),
      allChecked: false
    }))
  }
  handleCheckboxChange = (id, e) => {
    e.stopPropagation();
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    }), () => {
      this.setState({
        allChecked: this.getUncompletedTodoCount() === 0
      })
    })
  }
  markAllCheckbox = () => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        ({ ...todo, checked: true })
      ),
      allChecked: true
    }))
  }
  getUncompletedTodoCount = () => {
    return this.state.todos.filter(todo => !todo.checked).length;
  }
  render() {
    const { inputValue, allChecked, todos } = this.state;
    const remaining = this.getUncompletedTodoCount();
    return (
      <div className="hwtodo">
        <h1 className="title">Todos - ReactJs</h1>
        <input type="text"
          placeholder="Type a todo and hit Enter"
          className="todoInput"
          value={inputValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress} />
        <div className="remaining">
          <span>{remaining} remaining</span>
          <button onClick={this.clear} className="btn">Clear Completed Todos</button>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={this.markAllCheckbox}
            />
            Mark All Done
          </label>
        </div>
        <div className="todoContainer">
          {todos.map((todo, index) =>
          (<div key={todo.id}
            className={`todoItem ${index > 0 ? 'with-border' : ''}`}
            onClick={(e) => this.handleCheckboxChange(todo.id, e)}>
            <label>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={(e) => this.handleCheckboxChange(todo.id, e)}
                onClick={(e) => e.stopPropagation()}
              />
              {todo.text}
            </label>
          </div>))}
        </div>
      </div>
    )
  }
}
export default TodoList