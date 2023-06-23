import React, { Component } from "react";

class App extends Component {
  state = {
    chance: Math.random()
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.chance >= 0.5;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
  }

  handleClick = () => {
    this.setState({ chance: Math.random() });
    // this.forceUpdate();
  };

  render() {
    return (
      <div>
        <p>Chance: {this.state.chance.toFixed(2)}</p>
        <button onClick={this.handleClick}>Roll a dice</button>
      </div>
    );
  }
}

export default App;
