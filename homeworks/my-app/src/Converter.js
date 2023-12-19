import React, { useState } from "react";

const Converter = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const convert = (inputValue) => {
    const number = parseInt(inputValue);

    if (isNaN(number)) {
      setResult(inputValue);
    } else {
      let suffix;

      if (number % 10 === 1) {
        suffix = "st";
      } else if (number % 10 === 2) {
        suffix = "nd";
      } else if (number % 10 === 3) {
        suffix = "rd";
      } else {
        suffix = "th";
      }
      setResult(number + suffix);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    convert(e.target.value);
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Provide your input"
        value={inputValue}
        onChange={handleInputChange}
      />

      <input className="input" value={result} />
    </div>
  );
};

export default Converter;
