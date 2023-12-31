import React, {useState, useEffect} from 'react';
import './beautify.css';
import TodoItem from "./TodoItem";

function TodoApp() {
    const [todos, setTodos] = useState(() => {
        // Load todos from local storage or set as empty array
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });
    const [input, setInput] = useState('');
    useEffect(() => {
        // Save todos to local storage
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const addTodo = () => {
        if (input.trim() === '') return;
        setTodos([...todos, {text: input, completed: false}]);
        setInput('');
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const markAllCompleted = () => {
        const allMarked = todos.map(todo => ({...todo, completed: true}));
        setTodos(allMarked);
    };

    const clearCompleted = () => {
        const activeTodos = todos.filter(todo => !todo.completed);
        setTodos(activeTodos);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };
    const activeTodosCount = todos.filter(todo => !todo.completed).length;

    return (
        <div className="todo-container">
            <h1>Todos - ReactJs</h1>
            <input
                className="todo-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Type a todo and hit Enter'
            />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        onToggle={() => toggleTodo(index)}
                    />
                ))}
            </ul>
            <div>{activeTodosCount} remaining</div>
            <div className="buttons-container">
                <button className="button-mark-all" onClick={markAllCompleted}>Mark All Done</button>
                <button className="button-clear-completed" onClick={clearCompleted}>Clear Completed Todos</button>
            </div>
        </div>
    );
}

export default TodoApp;
