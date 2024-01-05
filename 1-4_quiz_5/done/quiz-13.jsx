/* What will be logged to the console after the button is clicked: */

class App extends React.Component {
  
  state = { count: 0 };
  
  handleClick = () => {
    this.setState({ 
      count: this.state.count + 1 
    }, () => {
      console.log(`Count: ${this.state.count}`);
    });
    console.log(`Count: ${this.state.count}`);
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}