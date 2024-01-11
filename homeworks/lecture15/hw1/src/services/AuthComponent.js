import React from 'react'
import { authService } from './authService'
import { Navigate } from 'react-router-dom'

export default function AuthComponent({children}) {
  if(!authService.isAuthenticated){
    return <Navigate to='/login' replace/>
  }
  else{
    return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
  }
  
}
