import { Container, Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  return (
    <Container
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}
    >
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant='h3'>Home</Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href='/login'>Login</Link>
            </Grid>
        </Grid>
    </Container>
  )
}
