import { Avatar, Card, CardContent, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserItem = ({user, onClick}) => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItem onClick={
                () => {
                    navigate('/users/' + user.login);
                }
            }>
                <ListItemText>
                    <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                    {user.id}
                    </Typography>
                </ListItemText>
                <ListItemText>
                    <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                    {user.login}
                    </Typography>
                </ListItemText>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.avatar_url}/>
                </ListItemAvatar>
            </ListItem>
        </React.Fragment>
    )
}
export default UserItem;