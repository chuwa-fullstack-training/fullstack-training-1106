import React, { useState } from 'react'
import LoginPaper from '../components/LoginPaper'
import { AppBar, Button, MenuItem, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  return (
    <React.Fragment>
        <AppBar position="static">
            <Toolbar>
                <Button
                    color='inherit'
                >Login</Button>
            </Toolbar>
        </AppBar>
        <LoginPaper />
    </React.Fragment>
    
  )
}
