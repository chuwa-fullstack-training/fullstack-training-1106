import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = (value) => {
    this.setState((prev) => ({
      count: prev.count + value,
    }));
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <div className="buttons">
          <button onClick={() => this.handleIncrement(1)}>+1</button>
          <button onClick={() => this.handleIncrement(10)}>+10</button>
          <button onClick={() => this.handleIncrement(100)}>+100</button>
          <button onClick={() => this.handleIncrement(1000)}>+1000</button>
        </div>
        <div className="count">{this.state.count}</div>
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
