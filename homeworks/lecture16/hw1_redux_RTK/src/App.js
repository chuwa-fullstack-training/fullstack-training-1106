import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import {
    addTodo,
    clearCheckedTodos,
    checkTodo,
    checkAllTodos
} from './actions';

function App({todos,
    currentId,
    allChecked,
    remaining,

    addTodo,
    clearCheckedTodos,
    checkTodo,
    checkAllTodos}){
    

    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'start'}}>
            <h3>Todos - ReactJs</h3>
            <div>   <TodoCreate /> </div>
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
            <TodoList />
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    currentId: state.currentId,
    allChecked: state.allChecked,
    remaining: state.remaining,
  });
  
  const mapDispatchToProps = {
    addTodo,
    clearCheckedTodos,
    checkTodo,
    checkAllTodos,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);


