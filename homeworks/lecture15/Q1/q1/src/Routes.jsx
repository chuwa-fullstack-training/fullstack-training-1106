// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Login, Main, Users, UserDetails } from './components';
import Main from './components/Main';  
import Login from './components/Login';  
import Users from './components/Users';  
import UserDetails from './components/UserDetails'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:login" element={<UserDetails />} />
    </Routes>
  );
};

export default AppRoutes;

