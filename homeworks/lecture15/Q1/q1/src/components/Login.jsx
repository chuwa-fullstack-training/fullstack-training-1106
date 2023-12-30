import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../styles/styles.css'; // Make sure to import the correct path for your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setLogIn } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (username === 'zs24' && password === '12345') {
        setLogIn();
        navigate('/');
      } else {
        alert('Invalid username or password');
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <label className="login-label">
        Username:
        <input
          className="login-input"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="login-label">
        Password:
        <input
          className="login-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p className="login-error">{error}</p>}
      <button className="login-button" onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
