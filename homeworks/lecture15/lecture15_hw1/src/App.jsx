import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User'
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css'
function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");
  const [username, setUsername] = useState('');

  const login = (newUsername) => {
    setIsLogin(true);
    setUsername(newUsername);
    localStorage.setItem("isLogin", "true");
  };
  const logout = () => {
    setIsLogin(false);
    localStorage.setItem("isLogin", "false");
  };
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home isLogin={isLogin} logout={logout} username={username} />}></Route>
        <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login login={login} />} />
        <Route path="/users" element={
          <ProtectedRoute isLogin={isLogin}>
            <User />
          </ProtectedRoute>
        } />
        <Route path="/users/:username" element={<ProtectedRoute isLogin={isLogin}><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, isLogin }) => {
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default App


