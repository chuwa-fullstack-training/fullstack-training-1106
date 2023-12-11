import { useState } from "react";
import "./Hw3.css";

export default function Hw3() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter + 10)}>+10</button>
        <button onClick={() => setCounter(counter + 100)}>+100</button>
        <button onClick={() => setCounter(counter + 1000)}>+1000</button>
      </div>
      <span>{counter}</span>
    </div>
  );
}
