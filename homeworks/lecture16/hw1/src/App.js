// App.js
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, toggleTodo, markAllCompleted, clearCompleted} from './todoSlice';
import './beautify.css'

function App() {
    const [newTodo, setNewTodo] = useState('');
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const activeTodosCount = todos.filter(todo => !todo.completed).length;
    const handleAddTodo = (e) => {
        if (e.key === 'Enter' && newTodo.trim() !== '') {
            dispatch(addTodo({
                id: Date.now(),
                text: newTodo,
            }));
            setNewTodo('');
        }
    };
    const onToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div className="todo-container">
            <h1>Todos - ReactJs</h1>
            <input
                className="todo-input"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleAddTodo}
                placeholder='Type a todo and hit Enter'
            />
            <ul>
                {todos.map((todo) => (
                    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                        <input
                            className="todo-checkbox"
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                    </li>
                ))}
            </ul>
            <div>{activeTodosCount} remaining</div>
            <div className="buttons-container">
                <button className="button-mark-all" onClick={() => dispatch(markAllCompleted())}>Mark All Done</button>
                <button className="button-clear-completed" onClick={() => dispatch(clearCompleted())}>Clear Completed
                    Todos
                </button>
            </div>
        </div>
    )
        ;
}

export default App;
