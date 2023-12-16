import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
//import './App.css'
import GithubList from './GithubList.jsx'
import ColorComponents from './ColorComponents.jsx'
import Todo from './TodoList.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hw1" element={<GithubList />}></Route>
          <Route path="/hw2" element={<ColorComponents />}></Route>
          <Route path="/hw3" element={<Todo />}></Route>
          <Route
            path="/"
            element={<Navigate to="/hw1" replace></Navigate>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
