import React from 'react';

class App extends React.Component {
  // state = {
  //   name: 'Aaron'
  // }
  constructor(props) {
    super(props);
    this.state = {
      name: 'Aaron',
      counter: 0
    };
  }

  handleClick = () => {
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log('in setState callback, counter: ', this.state.counter);
    });
    console.log('after setState, counter: ', this.state.counter);
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <div>
        <h1>My First React App</h1>
        <h2>Welcome {this.state.name}</h2>
        <p onClick={this.handleClick}>counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
