import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

export default function LoginPaper() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if(authService.login(username, password)){
            navigate('/');
        }
        else{
            alert('Login failed');
        }
    }
  return (
    <Container>
        <Paper sx={{ height: '100vh'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h3'>Login</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Username" fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Password" fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='primary'
                        onClick={handleLogin}
                    >Login</Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
  )
}
