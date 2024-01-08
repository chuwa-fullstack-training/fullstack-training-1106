import "../styles/login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // fetch data
    // try {
    //   const response = await axios.post("/api/login", {
    //     username,
    //     password,
    //   });
    //   if (response.status === 200) {
    //     localStorage.setItem("user", username);
    //     navigate(-1);
    //   }
    // } catch (error) {
    //   console.log("Error during login");
    // }
    if (username && password) {
      localStorage.setItem("user", username);
      return navigate(-1);
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="inputField">
        <label htmlFor="username">Username:</label>
        <br />
        <input
          id="username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="inputField">
        <label htmlFor="password">Password:</label>
        <br />
        <input
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
