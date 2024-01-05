// Create a stopwatch application

// Use React state, event handlers and the setTimeout or setInterval functions to manage the timer’s state and actions.

/* Implement stop function. */



















import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [intervalRef, setIntervalRef] = useState();

  const start = () => {
    if(!intervalRef) {
      let myInterval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);

      setIntervalRef(myInterval);
    }
  }

  const pause = () => {
    clearInterval(intervalRef);
    setIntervalRef();
  }

  const stop = () => {
    setCount(0);
    clearInterval(intervalRef);
    setIntervalRef();
  }

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
      <p>Timer: {count}</p>
    </div>
  )
}

export default App;