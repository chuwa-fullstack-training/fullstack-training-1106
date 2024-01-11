import { Container, TextField, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import UserCard from '../components/UserCard';

export default function UserDetailPage() {
    const { username } = useParams();
  return (
    <Container>
        <Typography variant='h3'>User Detail</Typography>
        <UserCard user={username}/>
    </Container>
  )
}
