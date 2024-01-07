import React, { useState } from "react";
import Digit from './components/digit';
import './App.css';

function App() {
  const firstDigits = Array.from({ length: 16 }, (_, i) => i + 1);
  const secondDigits = Array.from({ length: 4 }, (_, i) => i + 1);

  const [currNums, setCurrNums] = useState("status bar");

  const handlePress = (val) => {
    if (currNums === "status bar") { setCurrNums("" + val) }
    else { setCurrNums(prev => prev + " " + val); }
  }

  return (
    <div className="app">
      <div className="top-container">
        <div className="status-bar">
          <p>{currNums}</p>
        </div>

        <div className="top-number-container">
          {
            firstDigits.map((val) => <Digit number={val} handlePress={() => handlePress(val)} />)
          }
        </div>
      </div>

      <div className="bottom-number-container">
        {
          secondDigits.map((val) => <Digit number={val + 16} handlePress={() => handlePress(val+16)} />)
        }
      </div>
    </div>
  );
}

export default App;
