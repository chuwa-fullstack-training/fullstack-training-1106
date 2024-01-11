import "../styles/home.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const user = localStorage.getItem("user");
  const [username, setUsername] = useState(user);

  return (
    <div className="Home">
      <h1>Home</h1>
      {user ? (
        <>
          <h1>Welcome {username}</h1>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUsername(null);
            }}
          >
            Log out
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
