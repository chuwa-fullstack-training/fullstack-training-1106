import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const GitHubUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://api.github.com/users?per_page=100')
            .then(response => {
                const topUsers = response.data.slice(0, 10);
                setUsers(topUsers);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handleRowClick = async (user) => {
        navigate(`/users/${user.login}`);
    };
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{flexBasis: '65%'}}>
                <h1>GitHub Popular Users</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Avatar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id} onClick={() => handleRowClick(user)}>
                            <td>{user.id}</td>
                            <td>{user.login}</td>
                            <td>
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    style={{width: '100px', height: '100px'}}
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

export default GitHubUsers;
