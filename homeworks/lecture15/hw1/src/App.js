import React, { useEffect, useState } from "react";
import Person from "./components/person";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home";
import Profile from "./components/profile";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem("isLoggedIn") === "true"
   );
   const [username, setUsername] = useState(localStorage.getItem("username"));

   useEffect(() => {
      console.log(isLoggedIn);
   }, [isLoggedIn]);

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route
                  path="/"
                  element={
                     <Home
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        username={username}
                     />
                  }
               />
               {!isLoggedIn && (
                  <Route
                     path="/login"
                     element={
                        <Login setIsLoggedIn={setIsLoggedIn} setUser={setUsername} />
                     }
                  />
               )}
               {isLoggedIn && (
                  <>
                     <Route path="/users" element={<Person />} />
                     <Route path="/users/:name" element={<Profile />} />
                  </>
               )}
               <Route
                  path="*"
                  element={<Navigate to="/" replace />}
               />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
