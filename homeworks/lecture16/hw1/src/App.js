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
        const uncheckedTodo = todos.filter(todo => {
            return !todo.checked;
        });
        if(uncheckedTodo.length !== 0){
            const updatedTodos = todos.map((todo) =>{
                return {...todo, checked: !allChecked}
            });
            setTodos(updatedTodos);
            setRemaining(0);   
        }else{
            const updatedTodos = todos.map((todo) =>{
                return {...todo, checked: false}
            });
            setTodos(updatedTodos);
            setRemaining(todos.length);   
        }
       
        setAllChecked(!allChecked);

            
    }

    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'start'}}>
            <h3>Todos - ReactJs</h3>
            <div>   <TodoCreate addTodo={addTodo} /> </div>
            <div style={{display: 'flex', alignItems:'center'}}>
                <p style={{marginRight:'70px'}}>{remaining} remaining</p>
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
        </div>
    )
}

export default App;