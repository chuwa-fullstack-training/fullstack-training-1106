import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import UserList from "./UserList";

const GithubUser = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
    </>
  );
};

export default GithubUser;
