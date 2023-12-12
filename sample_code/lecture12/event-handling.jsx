import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // use arrow function
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
