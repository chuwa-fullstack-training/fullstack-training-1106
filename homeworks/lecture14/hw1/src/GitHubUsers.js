import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./style.css"

const GitHubUsers = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get('https://api.github.com/users?per_page=100')
            .then(response => {
                const topUsers = response.data.slice(0, 10);
                setUsers(topUsers);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handleRowClick = async (user) => {
        setIsLoading(true);
        try {
            const userDetailsResponse = await axios.get(`https://api.github.com/users/${user.login}`);
            const response = await axios.get(`https://api.github.com/users/${user.login}/repos`);
            setSelectedUser({
                ...userDetailsResponse.data,
                repositories: response.data.slice(0, 3)
            });
        } catch (error) {
            console.error('Error fetching repositories:', error);
        } finally {
            setIsLoading(false); // 加载完成后设置isLoading为false
        }
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
            {selectedUser ? (
                    <div className='popup-details'>
                        <div style={{marginRight: '20px', marginTop: '20px'}}>
                            <img
                                src={selectedUser.avatar_url}
                                alt={selectedUser.login}
                                style={{width: '100px', height: '100px', borderRadius: '50%'}}
                            />
                        </div>
                        {/* 用户信息部分 */}
                        <div>
                            <h3>{selectedUser.name}</h3>
                            <p>Location: {selectedUser.location}</p>
                            <p style={{marginBottom: '5px'}}>Repositories:</p>
                            <ul style={{marginTop: '0px'}}>
                                {selectedUser.repositories.map(repo => (
                                    <li key={repo.id}>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                            {repo.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : isLoading?
                (
                    <div className="skeleton-wrapper">
                        <div style={{marginRight: '20px', marginTop: '20px'}}>
                            <div className="skeleton-avatar"></div>
                        </div>
                        <div>
                            <div className="skeleton-text short"></div>
                            <div className="skeleton-text"></div>
                            <div className="skeleton-text"></div>
                        </div>
                    </div>
                ):(<div></div>)
            }
        </div>

    );
};

export default GitHubUsers;
