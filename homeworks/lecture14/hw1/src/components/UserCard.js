import { Card, CardContent, CardMedia, Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect } from 'react'

const UserCard = ({user}) => {
  const [repos, setRepos] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);
  useEffect(() => {
    axios.get(user.repos_url)
    .then(res => {
        setRepos(res.data);
        console.log(repos);
    })
    .catch(err => {
        console.log(err);
    })
    axios.get(user.url)
    .then(res => {
        setSelectedUser(res.data);
        console.log(selectedUser);
    })
    .catch(err => {
        console.log(err);
    })
    }, []);

  return (
    <React.Fragment>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={user.avatar_url}
                alt="user avatar"
            />
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    Name: {user.login}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    User Name: {selectedUser && selectedUser.name}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    Location: {selectedUser && selectedUser.location}
                </Typography>
                <List>
                    {repos.slice(0, 3).map((repo) => (
                        <ListItem>
                            <ListItemText>
                                <Link href={repo.html_url} target="_blank">
                                    {repo.full_name}
                                </Link>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </CardContent>

        </Card>
    </React.Fragment> 
  )
}
export default UserCard;
