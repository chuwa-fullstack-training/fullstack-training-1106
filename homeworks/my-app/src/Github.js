import React, { useState, useEffect } from "react";
import "./github.css"; // Import the CSS file where you define the styles

const Github = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchGitHubUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);

        if (selectedUser) {
          const DetailResponse = await fetch(
            `https://api.github.com/users/${selectedUser.login}`
          );
          const DetailData = await DetailResponse.json();
          setSelectedUser(DetailData);

          const RepoResponse = await fetch(
            `https://api.github.com/users/${selectedUser.login}/repos`
          );
          const RepoData = await RepoResponse.json();
          const topRepos = RepoData.slice(0, 3).map((repo) => ({
            name: repo.name,
            descreption: repo.description,
          }));
          setRepositories(topRepos);
        }
      } catch (error) {
        console.error("Error fetching GitHub users:", error);
      }
    };

    fetchGitHubUsers();
  }, [selectedUser]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="github-container">
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

      <div className="user-profile">
        {selectedUser && (
          <>
            <div className="row">
              <div className="col-4">
                <img
                  className="avator-img"
                  src={selectedUser.avatar_url}
                  alt={`${selectedUser.login}'s avatar`}
                />
              </div>
              <div className="col-8 mt-3">
                <h2>{selectedUser.name}</h2>
                <p> Location: {selectedUser.location}</p>
                <h3>Repositories:</h3>
                <ul>
                  {repositories.map((repo) => (
                    <li key={repo.id}>
                      <a
                        href={`https://github.com/${selectedUser.login}/${repo.name}`}
                      >
                        {repo.name}
                      </a>
                      <p> {repo.descreption}</p>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Github;
