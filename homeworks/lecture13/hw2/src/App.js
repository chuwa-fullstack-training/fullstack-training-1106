import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            currentId: 0,
            allChecked: false,
            remaining: 0,
        };
    }

    addTodo = (title) => {
        const { todos, currentId } = this.state;

        const updatedTodos = [...todos, { id: currentId, title: title, checked: false }];

        this.setState({
            todos: updatedTodos,
            currentId: currentId + 1,
            remaining: updatedTodos.filter((todo) => !todo.checked).length,
        });
    };

    clearCheckedTodos = () => {
        const { todos } = this.state;

        const updatedTodos = todos.filter((todo) => !todo.checked);

        this.setState({
            todos: updatedTodos,
            allChecked: false,
            remaining: updatedTodos.filter((todo) => !todo.checked).length,
        });
    };

    checkTodo = (id) => {
        const { todos } = this.state;

        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked };
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos,
            remaining: updatedTodos.filter((todo) => !todo.checked).length,
        });
    };

    checkAllTodos = () => {
        const { todos, allChecked } = this.state;

        const updatedTodos = todos.map((todo) => ({ ...todo, checked: !allChecked }));

        this.setState({
            todos: updatedTodos,
            allChecked: !allChecked,
            remaining: allChecked ? updatedTodos.length : 0,
        });
    };

    render() {
        const { todos, allChecked, remaining } = this.state;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <h3>Todos - ReactJs</h3>
                    <div> <TodoCreate addTodo={this.addTodo} /> </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ marginRight: '70px' }}>{remaining} remaining</p>
                        <button className="clear-button" onClick={this.clearCheckedTodos}>
                            Clear Completed Todos
                        </button>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" checked={allChecked} onChange={this.checkAllTodos} />
                            Mark All Done
                        </label>
                    </div>
                    <div>
                        <TodoList todos={todos} handleSingleChecked={this.checkTodo} handleAllChecked={this.checkAllTodos} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


// import React, { useState } from 'react';
// import TodoList from './TodoList';
// import TodoCreate from './TodoCreate';

// function App(){
    
//     const [todos, setTodos] = useState([]);
//     const [currentId, setCurrentId] = useState(0);
//     const [allChecked, setAllChecked] = useState(false);
//     const [remaining, setRemaining] = useState(0);
    
//     const addTodo= (title)=>{
//         const updatedTodos = [ ...todos, { id: currentId, title: title, checked: false}];
//         setCurrentId((currentId) => currentId + 1);
//         setTodos(updatedTodos);

//         const remainingTodos = updatedTodos.filter(todo=> !todo.checked);
//         setRemaining(remainingTodos.length);
//     }
//     const clearCheckedTodos= ()=>{
//         const updatedTodos = todos.filter((todo) =>{
//             return !todo.checked;
//         });
//         setTodos(updatedTodos);
//         setAllChecked(allChecked => false);

//         const remainingTodos = updatedTodos.filter(todo=> !todo.checked);
//         setRemaining(remainingTodos.length);
//     }
//     const checkTodo = (id)=>{
//         const updatedTodos = todos.map((todo) =>{
//             if(todo.id === id){
//                 return { ...todo, checked:!todo.checked};
//             }
//             return todo;
//         });
//         setTodos(updatedTodos);

//         const remainingTodos = updatedTodos.filter(todo=> !todo.checked);
//         setRemaining(remainingTodos.length);
//     }
//     const checkAllTodos = ()=>{
//         const updatedTodos = todos.map((todo) =>{
//             return {...todo, checked: true}
//         });
//         setTodos(updatedTodos);
//         setAllChecked(!allChecked);

//         setRemaining(0);       
//     }

//     return (
//         <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
//             <div style={{display: 'flex', flexDirection:'column', alignItems:'start'}}>
//             <h3>Todos - ReactJs</h3>
//             <div>   <TodoCreate addTodo={addTodo} /> </div>
//             <div style={{display: 'flex', alignItems:'center'}}>
//                 <p style={{marginRight:'70px'}}>{remaining} remaining</p>
//                 <button className="clear-button" onClick={clearCheckedTodos}>Clear Completed Todos</button>
//             </div>
//             <div>
//                 <label>
//                     <input type='checkbox' checked={allChecked} onChange={checkAllTodos} />
//                     Mark All Done
//                 </label>
            
//             </div>
//             <div>
//             <TodoList todos={todos} handleSingleChecked={checkTodo} handleAllChecked={checkAllTodos} />
//             </div>
//         </div>
//         </div>
//     )
// }

// export default App;