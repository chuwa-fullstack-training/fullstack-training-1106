import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './componets/Header';
import { BoxProvider } from './context/BoxProvider';
function App() {
  return (
    <BoxProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          
        </Routes>
      </Router>
    </BoxProvider>
  );
}

export default App;
