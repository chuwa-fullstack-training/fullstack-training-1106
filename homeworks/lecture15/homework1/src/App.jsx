import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Users from './pages/Users'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState(() => {
    const storeUser = localStorage.getItem('user');
    return storeUser? JSON.parse(storeUser): undefined;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  },[user])
  return (
    <Router>
    <>
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser} />} />
        <Route path="login" element={<Login user={user} setUser={setUser} />} />
        <Route path="users" element={<Users user={user} />} />
      </Routes>
    </>
    </Router>
  )
}

export default App
