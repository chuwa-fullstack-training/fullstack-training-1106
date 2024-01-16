import React from 'react';
import { connect } from 'react-redux';
import { checkTodo } from './actions';

function Todo({todo, checkTodo}){
    const handleChange = ()=>{
        checkTodo(todo.id);
    }
   return (
    <div style={{width:'100%', border:'1px black solid'}}>
        <label>
            <input type='checkbox' checked={todo.checked} onChange={handleChange} />
            {todo.title}
        </label>
    </div>
   )
};

const mapDispatchToProps =  {
    checkTodo
}

export default connect(null, mapDispatchToProps)(Todo);
