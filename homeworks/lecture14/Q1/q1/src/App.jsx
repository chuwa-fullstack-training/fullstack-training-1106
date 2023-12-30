import React, { useState } from 'react';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import './styles/styles.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <UserList onSelectUser={handleSelectUser} className="user-list" />
      <UserProfile user={selectedUser} className="user-profile" />
    </div>
  );
}

export default App;
