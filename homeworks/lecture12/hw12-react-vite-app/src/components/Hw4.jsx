import { useState } from "react";

export default function Hw4() {
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    let suffix = "";
    if (inputVal !== "" && !isNaN(inputVal)) {
      const num = parseInt(inputVal);
      if (num % 10 === 1 && num % 100 !== 11) {
        suffix = "st";
      } else if (num % 10 === 2 && num % 100 !== 12) {
        suffix = "nd";
      } else if (num % 10 === 3 && num % 100 !== 13) {
        suffix = "rd";
      } else {
        suffix = "th";
      }
    }
    setResult(inputVal + suffix);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Provide your input"
        onChange={handleInputChange}
      />
      <input type="text" value={result} />
    </div>
  );
}
