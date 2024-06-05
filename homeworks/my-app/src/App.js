import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "./grid";
//const store = createStore(userReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  
  return (
   // <Provider store={store}>
   <Grid size={5} />
//</Provider>
  );
}

export default App;
