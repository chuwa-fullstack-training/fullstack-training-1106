import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

function App(){
    
    const [todos, setTodos] = useState([]);
    const [currentId, setCurrentId] = useState(0);
    const [allChecked, setAllChecked] = useState(false);
    const [remaining, setRemaining] = useState(0);
    
    const addTodo= (title)=>{
        const updatedTodos = [ ...todos, { id: currentId, title: title, checked: false}];
        setCurrentId((currentId) => currentId + 1);
        setTodos(updatedTodos);

        const remainingTodos = updatedTodos.filter(todo=> !todo.checked);
        setRemaining(remainingTodos.length);
    }
    const clearCheckedTodos= ()=>{
        const updatedTodos = todos.filter((todo) =>{
            return !todo.checked;
        });
        setTodos(updatedTodos);
        setAllChecked(allChecked => false);

        const remainingTodos = updatedTodos.filter(todo=> !todo.checked);
        setRemaining(remainingTodos.length);
    }
    const checkTodo = (id)=>{
        const updatedTodos = todos.map((todo) =>{
            if(todo.id === id){
                return { ...todo, checked:!todo.checked};
            }
            return todo;
        });
        setTodos(updatedTodos);

        const remainingTodos = updatedTodos.filter(todo=> !todo.checked);
        setRemaining(remainingTodos.length);
    }
    const checkAllTodos = ()=>{
        const updatedTodos = todos.map((todo) =>{
            return {...todo, checked: true}
        });
        setTodos(updatedTodos);
        setAllChecked(!allChecked);

        setRemaining(0);       
    }

    return (
        <div className="todo-app">
            <h3>Todos - ReactJs</h3>
            <TodoCreate addTodo={addTodo} />
            <div className='remain-clear'>
                <p>{remaining} remaining</p>
                <button className="clear-button" onClick={clearCheckedTodos}>Clear Completed Todos</button>
            </div>
            <div>
                <label>
                    <input type='checkbox' checked={allChecked} onChange={checkAllTodos} />
                    Mark All Done
                </label>
            
            </div>
            <div>
            <TodoList todos={todos} handleSingleChecked={checkTodo} handleAllChecked={checkAllTodos} />
            </div>
            
        </div>
    )
}

export default App;