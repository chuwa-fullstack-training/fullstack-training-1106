import React, { useEffect, useState } from "react";

function Clock() {
  const [datetime, setDatetime] = useState(new Date());

  // componentDidMount
  useEffect(() => {
    console.log("side effect where to setup interval");
    const intervalId = setInterval(() => setDatetime(new Date()), 1000);

    // componentWillUnmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   console.log("another effect");
  // });

  // console.log("inside function body");

  return <h1>{datetime.toLocaleTimeString()}</h1>;
}

export default function App() {
  return (
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}
