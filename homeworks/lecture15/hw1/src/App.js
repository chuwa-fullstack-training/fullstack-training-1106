import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthComponent from './services/AuthComponent';
import Users from './components/Users';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/users" 
          element={
            <AuthComponent>
              <Users />
            </AuthComponent>
          }
        />
        <Route path="/users/:username" 
          element={
            <AuthComponent>
              <UserDetailPage />
            </AuthComponent>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
