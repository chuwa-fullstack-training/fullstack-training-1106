import { useState } from "react";
import "./hw3.css";

const Hw3 = () => {
  const [counter, setCounter] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleAdd = (value) => {
    setCounter((prev) => prev + value);
    setIsButtonClicked(true);

    setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);
  };

  const handleReset = () => {
    setCounter(0);
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);
  };

  const counterColor = isButtonClicked ? "pink" : "#333";
  return (
    <div className="counter-container">
      <div className="counter-buttons-container">
        <button onClick={() => handleAdd(1)}>1</button>
        <button onClick={() => handleAdd(10)}>10</button>
        <button onClick={() => handleAdd(100)}>100</button>
        <button onClick={() => handleAdd(1000)}>1000</button>
        <button onClick={handleReset}>reset</button>
      </div>
      <h3 style={{ color: counterColor }} className="counter-value">
        counter: {counter}
      </h3>
    </div>
  );
};

export default Hw3;
