import React, { useState } from 'react';
import './App.css';

function App() {
   const [currNum, setCurrNum] = useState(0);

   return (
      <div className="App">
         <div>
            <button onClick={() => (setCurrNum(prev => prev + 1))}>+1</button>
            <button onClick={() => (setCurrNum(prev => prev + 10))}>+10</button>
            <button onClick={() => (setCurrNum(prev => prev + 100))}>+100</button>
            <button onClick={() => (setCurrNum(prev => prev + 1000))}>+1000</button>
            <button onClick={() => (setCurrNum(0))}>Reset</button>
         </div>
         <label>{currNum}</label>
      </div>
   );
}

export default App;
