import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./github.css";

const UserProfile = ({ selectedUser, setSelectedUser }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const DetailResponse = await fetch(
          `https://api.github.com/users/${selectedUser.login}`
        );
        const DetailData = await DetailResponse.json();
        setSelectedUser(DetailData);

        const RepoResponse = await fetch(
          `https://api.github.com/users/${selectedUser.login}/repos`
        );
        const RepoData = await RepoResponse.json();
        const repos = RepoData.map((repo) => ({
          name: repo.name,
          descreption: repo.description,
        }));
        setRepositories(repos);
      } catch (error) {
        console.error("Error fetching GitHub users:", error);
      }
    };
    fetchProfile();
  }, [selectedUser, setSelectedUser]);

  return (
    <div>
      <img
        className="avator-big"
        src={selectedUser.avatar_url}
        alt={`${selectedUser.login}'s avatar`}
      />
      <h2>{selectedUser.name}</h2>
      <p> Location: {selectedUser.location}</p>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={`https://github.com/${selectedUser.login}/${repo.name}`}>
              {repo.name}
            </a>
            <p> {repo.descreption}</p>{" "}
          </li>
        ))}
      </ul>
      <Link to="/users">Back to Users</Link>
    </div>
  );
};

export default UserProfile;
