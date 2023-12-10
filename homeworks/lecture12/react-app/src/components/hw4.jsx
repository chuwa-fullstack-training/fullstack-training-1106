import { useEffect, useState } from "react";

const Hw4 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
  };
  useEffect(() => {
    if(input === "") {
        return;
    }
    const timer = setTimeout(() => {
        if(isNaN(input)) {
            return setResult(input);
        }
        const lastDigit = input[input.length-1];
        let suffix;
        switch (lastDigit) {
            case "1":
                suffix = "st";
                break;
            case "2":
                suffix = "nd";
                break;
            case "3":
                suffix = "rd";
                break;
            default:
                suffix = "th";
        }
        setResult(input + suffix);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Provide your input"
          value={input}
          onChange={handleInputChange}
        />
        <input type="text" value={result} disabled />
      </div>
    </>
  );
};

export default Hw4;
