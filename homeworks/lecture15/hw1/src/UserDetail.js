import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetail = () => {
    const [userDetails, setUserDetails] = useState(null);
    const { login } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${login}`);
                const repo = await axios.get(`https://api.github.com/users/${login}/repos`);
                setUserDetails({
                    ...response.data,
                    repositories: repo.data.slice(0, 3)
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [login]);

    if (!userDetails) {
        return <div>Loading...</div>;
    }
    const handleBackClick = () => {
        navigate('/users'); // 导航回用户列表
    };
    const userDetailStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        maxWidth: '500px',
        margin: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '10px',
        background: '#f4f4f4'
    };

    const avatarStyle = {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '3px solid #007bff',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        fontSize: '1em',
    };
    return (
        <div style={userDetailStyle}>
            <h1>{userDetails.name || userDetails.login}</h1>
            <img src={userDetails.avatar_url} alt={userDetails.login} style={avatarStyle} />
            <p><strong>Username:</strong> {userDetails.login}</p>
            <p><strong>Location:</strong> {userDetails.location || 'Not specified'}</p>
            <p><strong>Bio:</strong> {userDetails.bio || 'No bio available'}</p>
            <p><strong>Followers:</strong> {userDetails.followers}</p>
            <p><strong>Following:</strong> {userDetails.following}</p>
            <p><strong>Public Repositories:</strong> {userDetails.public_repos}</p>
            <a href={userDetails.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
            <div>
                <h2>Repositories</h2>
                <ul>
                    {userDetails.repositories.map(repo => (
                        <li key={repo.id}>
                            <strong>{repo.name}</strong> - {repo.description || 'No description'}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleBackClick} style={buttonStyle}>Back to Users</button>
        </div>
    );
};

export default UserDetail;
