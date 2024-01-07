import { Link } from "react-router-dom";

const Home = ({ isLoggedIn, username, handleLogout }) => {

  return (
    <div className="container text-center">
      <h1>Home</h1>

      {!isLoggedIn && <Link to="/login">Login</Link>}
      {isLoggedIn && (
        <>
          <h1>Welcome, {username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Home;
