import React from 'react';

// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.childRef = React.createRef();
//   }
//   focusInput = () => {
//     this.childRef.current.focus();
//   };
//   render() {
//     return <input type="text" ref={this.childRef} />;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocus = () => {
    // this.inputRef.current.focusInput();
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* <Input ref={this.inputRef} /> */}
        <button onClick={this.handleFocus}>Focus!</button>
      </div>
    );
  }
}

export default App;
