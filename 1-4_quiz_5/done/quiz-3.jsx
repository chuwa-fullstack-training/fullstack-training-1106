/* Analyze the below code and advise what is wrong with using setState() inside the render() method: */

import React, { Component } from "react";

class App extends Component {
  state = {
	  counter: 0,
  };
 
  render() {
	  this.setState({ counter: this.state.counter + 1 });
	  return <div>Counter: {this.state.counter}</div>;
  }
}

export default App;