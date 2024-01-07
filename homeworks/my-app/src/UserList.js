import { useNavigate } from "react-router-dom";
import "./github.css";
import React, { useState, useEffect} from "react";

const UserList = ({setSelectedUser}) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();  

  const handleUserClick = (user) => {
    setSelectedUser(user);
    navigate(`/users/${user.login}`);
  };
  useEffect(() => {
    const fetchGitHubUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching GitHub users:", error);
      }
    };
    fetchGitHubUsers(); 
  }, []);

  return (
    <div className="list-container">
    <div className="users-list">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>
                <img
                  className="avator"
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default UserList;
