import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import ProtectedRoute from "./pages/components/ProtectedRoute.jsx";
import UserList from "./pages/userList.jsx";
import UserPage from "./pages/userPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={<ProtectedRoute path="/user" element={<UserList />} />}
        />
        <Route
          path="/user/:login"
          element={
            <ProtectedRoute path="/user/:login" element={<UserPage />} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
