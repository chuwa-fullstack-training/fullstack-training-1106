import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleLogout = () => {
    const action = {
      type: "LOGOUT",
    };
    dispatch(action);
  };

  return (
    <div className="container text-center">
      <h1>Home</h1>
      {!user.isLoggedIn && <Link to="/login">Login</Link>}
      {user.isLoggedIn && (
        <>
          <h1>Welcome, {user.username}</h1>

          <button onClick={handleLogout}>Logout</button>
          <br />
          <Link to="/users">Users</Link>
        </>
      )}
    </div>
  );
};

export default Home;
