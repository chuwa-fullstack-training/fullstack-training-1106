
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import UserProfile from './UserProfile';
import '../styles/styles.css';

function UserDetails() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <UserList onSelectUser={handleSelectUser} className="user-list" />
      <UserProfile user={selectedUser} className="user-profile" />
      <Link to="/">Return</Link>
    </div>
  );
}

export default UserDetails;