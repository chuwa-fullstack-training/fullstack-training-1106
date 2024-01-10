import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import GithubList from "./pages/GithubList";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route element={<Auth></Auth>}>
          <Route path="/users" element={<GithubList></GithubList>}></Route>
          <Route path="/users/:login" element={<UserDetail></UserDetail>}></Route>
        </Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
