import React from 'react';
import './styles.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      started: false
    };
    this.intervalId = null;
  }

  handleStart = () => {
    this.setState({ started: true });
    this.intervalId = setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 1 })),
      1000
    );
  };

  handleStop = () => {
    this.setState({ started: false, count: 0 });
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        {!this.state.started ? (
          <button onClick={this.handleStart}>start</button>
        ) : (
          <button onClick={this.handleStop}>stop</button>
        )}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Timer />
        <Timer />
      </div>
    );
  }
}

export default App;
