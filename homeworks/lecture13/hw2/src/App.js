import './App.css';
import React from "react";
import Digit from './components/digit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firstDigits = Array.from({ length: 16 }, (_, i) => i + 1);
    this.secondDigits = Array.from({ length: 4 }, (_, i) => i + 1);
    this.state = { currNums: "" };
    console.log(this.allDigits);
  }

  handlePress = (val) => {
    this.setState({
      currNums: this.state.currNums + " " + val
    })
  }

  render() {
    return (
      <div className="app">
        <div className="top-container">
          <div className="status-bar">
            <p>{this.state.currNums}</p>
          </div>

          <div className="top-number-container">
            {
              this.firstDigits.map((val) => <Digit number={val} handlePress={() => this.handlePress(val)} />)
            }
          </div>
        </div>

        <div className="bottom-number-container">
          {
            this.secondDigits.map((val) => <Digit number={val + 16} handlePress={() => this.handlePress(val+16)} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
