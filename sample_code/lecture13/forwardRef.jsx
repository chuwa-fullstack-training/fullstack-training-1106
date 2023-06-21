import React from 'react';

const FowardInput = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FowardInput ref={this.inputRef} />
        <button onClick={this.handleFocus}>Focus!</button>
      </div>
    );
  }
}

export default App;
