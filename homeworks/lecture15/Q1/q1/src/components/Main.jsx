// pages/Main.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Main = () => {
  const { isUserLoggedIn, setLogOut } = useAuth();

  return (
    <div className="main-container">
      <h1 className="welcome-message">{isUserLoggedIn ? 'Welcome here!' : 'Welcome Login'}</h1>
      <div className="button-container">
        {isUserLoggedIn ? (
          <div>
            <button className="main-button" onClick={setLogOut}>Log Out</button>
            <Link to="/users/:login" className="main-button">Users</Link>
          </div>
        ) : (
          <div>
            <Link className="main-button" to="/login">Log In</Link>
            <Link className="main-button" to="/users">Users</Link>
          </div>
        )}
      </div>
    </div>
  );



//   return (
//     <div className="main-container">
//       <h1 className="welcome-message">{isUserLoggedIn ? 'Welcome here!' : 'Welcome Login'}</h1>
//       <div className="button-container">
//         {isUserLoggedIn ? (
//             <div>
//                 <button className="main-button" onClick={handleLogout}>Log Out</button>
//                 <Link to="/users" className="main-button">Users</Link>
//             </div>
//         ) : (
//             <div>
//                 <Link 
//                     className="main-button" 
//                     onClick={() => navigate('/login', { setIsUserLoggedIn })} 
//                     to="/login"
//                 >Log In</Link>
//                 <Link className="main-button" to="/users">Users</Link>
//             </div>
//         )}
//       </div>
//     </div>
//   );
};

export default Main;
