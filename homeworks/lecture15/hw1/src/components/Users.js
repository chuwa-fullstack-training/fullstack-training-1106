import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import UserList from './UserList'
import UserCard from './UserCard';

export default function Users() {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const handleUserSelected = (user) => {
    setSelectedUser(user);
  }
  return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={4}>
              <UserList onUserSelected={handleUserSelected}/>
            </Grid>
            <Grid item xs={8}
            >
              <Box sx={{ height: '100vh', bgcolor: 'grey.300' 
              , display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
              {
                selectedUser &&
                <UserCard user={selectedUser}/>
              }
              </Box>
            </Grid>
        </Grid>

    </React.Fragment>
  )
}
