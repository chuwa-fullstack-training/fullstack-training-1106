/* What's wrong with below codes */

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increment()}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default App;