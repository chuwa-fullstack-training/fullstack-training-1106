import "./github.css";
import { useState } from "react";

const UserList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  return (
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
  );
};

export default UserList;
