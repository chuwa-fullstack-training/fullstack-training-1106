import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userResponse = await axios.get(`https://api.github.com/users/${user.login}`);
          setUserData(userResponse.data);

          // Fetch repositories
          const reposResponse = await axios.get(userResponse.data.repos_url);
          setRepos(reposResponse.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="user-profile">
      {userData ? (
        <div className="user-profile-details">
          <img src={userData.avatar_url} alt={userData.login} />
          <p>Name: {userData.name}</p>
          <p>Location: {userData.location}</p>
          <div>
            <h3>Repositories:</h3>
            <ul>
              {repos.slice(0, 3).map(repo => (
                <li key={repo.id}>
                  <p>Name: {repo.name}</p>
                  <p>Description: {repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Select a user to view their profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
