/* What is wrong with the below code: */

import React, { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
 
  const increment = useCallback(() => {
	  setCount(count + 1);
  }, [/* */]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
 
export default App;