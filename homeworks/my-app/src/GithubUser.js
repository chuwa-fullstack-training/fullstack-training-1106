import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import ProtectedRoute from "./ProtectedRoute";

const GithubUser = () => {
  const [selectedUser, setSelectedUser] = useState(null);
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute >
              <UserList setSelectedUser={setSelectedUser} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users/:username"
          element={
            <ProtectedRoute>
              <UserProfile
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default GithubUser;
