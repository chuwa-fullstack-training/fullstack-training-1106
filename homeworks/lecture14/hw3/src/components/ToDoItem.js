import React from 'react';
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function ToDoItem({ todo, checked, onCheckChange }) {
    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked}
                    onChange={() => onCheckChange(!checked)}
                />
            </ListItemIcon>
            <ListItemText primary={todo} />
        </ListItem>
    );
}
