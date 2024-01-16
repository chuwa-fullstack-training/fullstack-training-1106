// // import {useState} from "react";
// import Todo from "./Todo"

// function TodoList({todos, handleSingleChecked }){
   
//    const renderedTodos = todos.map((todo) =>{
//     return <Todo key={todo.id} todo={todo} handleChecked={handleSingleChecked}/>;
//    });
//    return (
//     <>
        
//         <div style={{width:'310px'}}>
//             {renderedTodos}
//         </div>
//     </>
   
//    );
// };

// export default TodoList;

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const { todos, handleSingleChecked } = this.props;

        const renderedTodos = todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} handleChecked={handleSingleChecked} />;
        });

        return (
            <>
                <div style={{ width: '310px' }}>
                    {renderedTodos}
                </div>
            </>
        );
    }
}

export default TodoList;
