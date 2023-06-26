import { useEffect } from 'react';
import { Routes, Route, Outlet, useNavigate, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

function Home() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <>
      <h1>Home</h1>
      <nav
        style={{ display: 'flex', justifyContent: 'space-around', width: 300 }}
      >
        <Link to="dashboard">Dashboard</Link>
        <Link to="profile">Profile</Link>
        <Link to="signup">Sign up</Link>
        {user ? (
          <button onClick={handleLogOut}>Log out</button>
        ) : (
          <Link to="login">Log in</Link>
        )}
      </nav>
      <Outlet />
    </>
  );
}

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify({ id: 1, name: 'aaron' }));
    }
    waitForLogin(1500).then(() => navigate(-1));
  }, []);

  return <div>Logging in... Will redirect back to the last page</div>;
}

function SignUp() {
  return <div>Sign Up Form</div>;
}

function waitForLogin(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
