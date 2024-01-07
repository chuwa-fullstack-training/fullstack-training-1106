import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import ProtectedRoute from "./ProtectedRoute";

const GithubUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
 
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername(username);
    
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };
  useEffect(() => {
    console.log('Component mounted. isLoggedIn:', isLoggedIn);
  }, [isLoggedIn]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              username={username}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              handleLogin={handleLogin}
              setUsername={setUsername}
              username={username}
            />
          }
        />
        <Route
          path="/users"
        
          element={
            <ProtectedRoute username={username}>
            <UserList setSelectedUser={setSelectedUser} />
            </ProtectedRoute>
          }
        />

        <Route
          path="users/:username"
       
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <UserProfile
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default GithubUser;
