import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios';
import UserItem from './UserItem';

export default function UserList({onUserSelected}) {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://api.github.com/users')
        .then(res => {
            setUsers(res.data);
            console.log(users);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

  return (
    <React.Fragment>
        <List sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: '100vh', overflow: 'auto' }}>
            {users.map((user) => (
                <UserItem user={user} onClick={() => onUserSelected(user)}/>
            ))}
        </List>
    </React.Fragment>
  )
}
