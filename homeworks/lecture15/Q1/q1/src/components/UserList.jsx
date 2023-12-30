import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <table className="user-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr
              key={user.id}
              className="user-list-item"
              onClick={() => onSelectUser(user)}
            >
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td><img src={user.avatar_url} alt={user.login} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
