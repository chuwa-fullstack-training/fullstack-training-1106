/* What is the issue in the below code regarding useMemo hook: */

import React, { useMemo } from "react";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = useMemo(() => numbers.map((n) => n * 2), []);
 
  return (
    <div>
      {doubledNumbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
}
 
export default App;