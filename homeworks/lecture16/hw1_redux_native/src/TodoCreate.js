import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';


function TodoCreate({addTodo}){
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
                <input placeholder={'Type a todo abd hit Enter'} onChange={handleChange} value={title} style={{width:'300px'}}/>
            </form>
        </div>
    )
    
}

const mapDispatchToProps = {
    addTodo,
}
export default connect(null, mapDispatchToProps)(TodoCreate);