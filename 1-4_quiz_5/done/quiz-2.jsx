/* Find the issue in the below code snippet after rendering the list of names. */

import React from "react";

function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];

  const listItems = names.map((name) => <li>{name}</li>);
  
  return <ul>{listItems}</ul>;
}

export default App;