import React, { useState, useEffect } from 'react';

const Github = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchGitHubUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching GitHub users:', error);
      }
    };

    fetchGitHubUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };


  return (
    <div className="github-container">
      <div className="users-list">
        <h2>GitHub Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user)}>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
              <span>{user.login}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="user-profile">
        {selectedUser && (
          <>
            <h2>{selectedUser.login}'s Profile</h2>
            <img src={selectedUser.avatar_url} alt={`${selectedUser.login}'s avatar`} />
            <p>Name: {selectedUser.name}</p>

            <h3>Repositories:</h3>
            <ul>
              {/* You can fetch and display user's repositories here */}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Github;
