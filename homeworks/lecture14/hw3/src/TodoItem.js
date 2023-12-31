import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onToggle }) => (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
        <input
            className="todo-checkbox"
            type='checkbox'
            checked={todo.completed}
            onChange={onToggle}
        />
    </li>
);

TodoItem.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }),
    onToggle: PropTypes.func.isRequired,
};

export default TodoItem;
