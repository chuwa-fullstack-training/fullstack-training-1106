import { useState } from "react";

export default function Clock() {
  const [datetime, setDatetime] = useState(new Date());

  const handleClick = () => {
    setDatetime(new Date());
  };

  return (
    <>
      <h1>{datetime.toLocaleTimeString()}</h1>
      <button onClick={handleClick}>update</button>
    </>
  );
}
