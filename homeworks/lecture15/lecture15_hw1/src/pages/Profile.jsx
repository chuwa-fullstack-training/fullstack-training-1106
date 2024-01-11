import * as React from "react";
import { useLocation } from 'react-router-dom';
import styles from './profile.module.css'
import { Link } from 'react-router-dom';

const Profile = () => {
  const [repo, setRepo] = React.useState(null);
  const [profileData, setProfileDate] = React.useState(null);
  const location = useLocation();
  const user = location.state.user;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response_prof = await fetch(user.url);
        const data_prof = await response_prof.json();
        const response_resp = await fetch(user.repos_url);
        const data_resp = await response_resp.json();
        const repo_data = data_resp.map((repo) => ({
          repo_name: repo.name,
          description: repo.description,
          repos_url: repo.html_url
        }));
        const prof = {
          image: data_prof.avatar_url,
          name: data_prof.name,
          location: data_prof.location
        };
        setProfileDate(prof);
        setRepo(repo_data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    if (user) {
      fetchData();
    }
  }, [user]);
  return (
    profileData ?
      <div style={{ padding: "10px", maxHeight: "100vh" }}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <img src={profileData.image} />
            <div>Name: {profileData.name}</div>
            <div>Location: {profileData.location} </div>
            <div>
              Repositories:
              <ul>
                {repo && repo.map(r => (
                  <li key={r.repos_url}>
                    <a href={r.repos_url}
                      className={styles.link}>
                      {r.repo_name}
                    </a>
                    <p>{r.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to={'/users'} className={styles.link}>
            Back to Users
          </Link>
        </div>
      </div>
      : <></>
  )
}

export default Profile