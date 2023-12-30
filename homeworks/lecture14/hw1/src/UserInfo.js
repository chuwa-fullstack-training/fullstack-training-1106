import React, { useState } from 'react';

const UserTable = ({ users }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flexBasis: '65%' }}>
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
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {selectedUser && (
                <div style={{ flexBasis: '30%', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', background: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2>{selectedUser.login}</h2>
                    <p>ID: {selectedUser.id}</p>
                    <img
                        src={selectedUser.avatar_url}
                        alt={selectedUser.login}
                        style={{ width: '100px', height: '100px' }}
                    />
                    <p><a href={selectedUser.html_url} target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a></p>
                </div>
            )}
        </div>
    );
};

export default UserTable;
