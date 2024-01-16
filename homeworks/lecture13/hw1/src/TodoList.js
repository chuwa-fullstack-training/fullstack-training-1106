// import {useState} from "react";
import Todo from "./Todo"

function TodoList({todos, handleSingleChecked }){
   
   const renderedTodos = todos.map((todo) =>{
    return <Todo key={todo.id} todo={todo} handleChecked={handleSingleChecked}/>;
   });
   return (
    <>
        
        <div className="todo-list">
            {renderedTodos}
        </div>
    </>
   
   );
};

export default TodoList;