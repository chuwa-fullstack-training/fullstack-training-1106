/* eslint-disable react/prop-types */
import * as React from "react";

import { useNavigate } from 'react-router-dom';
import styles from './user.module.css'

function User() {
    const navigate = useNavigate();
    const getActiveUser = (user) => {
        navigate(`/users/${user.username}`, { state: { user } });
    }
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users");
                const data = await response.json();
                const simplifiedData = data.map((user) => ({
                    username: user.login,
                    id: user.id,
                    image: user.avatar_url,
                    repos_url: user.repos_url,
                    url: user.url
                }));
                setData(simplifiedData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((row) => (
                        <tr
                            key={row.repos_url}
                        >
                            <td>{row.id}</td>
                            <td>
                                <p onClick={() => getActiveUser(row)} className={styles.link}>
                                    {row.username}</p>
                            </td>
                            <td>
                                <img src={row.image} alt={row.username} className={styles.avatar} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}
export default User