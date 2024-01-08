import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UserPage = () => {
  const location = useLocation();
  const card = location.state;

  const [user, setUser] = useState({});
  const [repos, setRepo] = useState([]);

  useEffect(() => {
    // get user image, name, and location
    fetch(card.url)
      .then((res) => res.json())
      .then((data) =>
        setUser({
          id: data.id,
          name: data.name,
          location: data.location,
          image: data.avatar_url,
        })
      );
    // get user repositories
    fetch(card.repos_url)
      .then((res) => res.json())
      .then((data) => {
        setRepo(
          data
            .map((repo) => ({
              name: repo.name,
              description: repo.description,
            }))
            .slice(0, 3)
        );
      });
  }, [card]);

  return (
    <div className="carContainer" key={user.id}>
      <img className="cardImg" src={user.image} />
      <div className="cardTextContainer">
        <div className="cardText" style={{ fontSize: "18px" }}>
          <b>{user.name}</b>
        </div>
        <div className="cardText">{user.location}</div>
        <div className="cardText">Repositories:</div>
        <ul>
          {repos.map((repo) => (
            <li
              className="cardText"
              style={{ color: "dodgerblue" }}
              key={repo.name}
            >
              {repo.name}
              <div style={{ color: "black" }}>{repo.description}</div>
            </li>
          ))}
        </ul>
        <Link style={{ float: "right", marginRight: "2%" }} to="/user">
          back
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
