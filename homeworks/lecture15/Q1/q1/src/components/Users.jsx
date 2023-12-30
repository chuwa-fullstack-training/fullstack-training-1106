// pages/Users.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';

const Users = () => {
  return (
    <div>
      <h1>Before Logging in, you cannot see anything</h1>
      <Link to="/">Return</Link>
    </div>
  );
};

export default Users;
