import React from 'react';
import Todo from "./Todo";
import { connect } from 'react-redux';

function TodoList({todos}){
   
   const renderedTodos = todos.map((todo) =>{
    return <Todo key={todo.id} todo={todo}/>;
   });
   return (
    <>
        
        <div style={{width:'310px'}}>
            {renderedTodos}
        </div>
    </>
   
   );
};

const mapStateToProps =(state) => ({
    todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);

