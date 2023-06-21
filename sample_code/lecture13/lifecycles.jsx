import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. trigger constructor');
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    console.log('2. trigger componentWillMount');
  }

  componentDidMount() {
    console.log('4. trigger componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('During updating, trigger componentDidUpdate after re-render');
    console.log(prevState);
  }

  render() {
    console.log('3. trigger render');
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default App;
