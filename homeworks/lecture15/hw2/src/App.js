import { useState } from 'react';
import './App.css';
import Main from './component/main';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const colors = ["choose a color", "white", "red", "blue", "green"];

  return (
    <BrowserRouter>
      <Routes>
        {colors.map((color) => (
          (color === "choose a color") 
          ? <Route path={`/`} element={<Main />} />
          : <Route path={`/${color}`} element={<Main />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
