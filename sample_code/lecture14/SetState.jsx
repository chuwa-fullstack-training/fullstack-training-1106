import { useState } from "react";

export default function Clock() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>update</button>
    </>
  );
}
