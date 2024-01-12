import React, { useState } from 'react';


function TodoCreate({ addTodo}){
    const [title, setTitle] = useState('');
    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        addTodo(title);
        setTitle('');
    }

    return (
        <div className="todo-input-bar">
            <form onSubmit={handleSubmit}>
                <input placeholder={'Type a todo abd hit Enter'} onChange={handleChange} value={title}/>
            </form>
        </div>
    )
    
}

export default TodoCreate;